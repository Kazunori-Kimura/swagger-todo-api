const path = require("path");
const Todo = require("./Todo");
const sqlite = require("sqlite3").verbose();

class TodoModel {
  constructor() {
    this.db = null;
  }

  async open() {
    if (this.db === null) {
      this.db = await openDatabase();
    }
  }

  close() {
    if (this.db !== null) {
      this.db.close();
      this.db = null;
    }
  }

  /**
   * 全件取得
   * 
   * @returns {Promise<Array<Todo>>}
   */
  async getAll() {
    try {
      await this.open();
      const todoes = await this._getAll();
      return todoes;
    } catch (err) {
      throw err;
    } finally {
      this.close();
    }
  }

  /**
   * 全件取得
   * 
   * @private
   * @returns {Promise<Array<Todo>>}
   */
  _getAll() {
    return new Promise((resolve, reject) => {
      const todoes = [];
      this.db.all(`select id, title, done, created from todoes order by id`,
        (err, rows) => {
          if (err) {
            reject(err);
            return;
          }

          rows.forEach((row) => {
            const todo = new Todo(row.title, row.id, row.done === 1, row.created);
            todoes.push(todo);
          });
          
          resolve(todoes);
        }
      );
    });
  }

  /**
   * find todo by id
   * 
   * @param {number} id 
   * @returns {Promise<Todo>}
   */
  async getTodoById(id) {
    try {
      await this.open();
      const todo = await this._getTodoById(id);
      return todo;
    } catch(err) {
      throw err;
    } finally {
      this.close();
    }
  }

  /**
   * 1件取得
   * 
   * @private
   * @param {number} id 
   * @returns {Promise<Todo>}
   */
  _getTodoById(id) {
    return new Promise((resolve, reject) => {
      this.db.get(`select id, title, done, created from todoes where id = $id`,
      { $id: id },
      (err, res) => {
        if (err) {
          reject(err);
          return;
        }
        const todo = new Todo(res.title, res.id, res.done === 1, res.created);
        resolve(todo);
      });
    });
  }

  /**
   * insert item
   * 
   * @param {Todo} todo 
   * @returns {Promise<number>} insert item count
   */
  async create(todo) {
    try {
      await this.open();
      const count = await this._create(todo);
      return count;
    } catch (err) {
      throw err;
    } finally {
      this.close();
    }
  }

  /**
   * insert item
   * 
   * @private
   * @param {Todo} todo 
   * @returns {Promise<number>} insert item count
   */
  _create(todo) {
    return new Promise((resolve, reject) => {
      this.db.run(`insert into todoes (title, done) values ($title, $done)`,
        { $title: todo.title, $done: todo.done ? 1 : 0 },
        (err, count) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(count);
        }
      );
    });
  }

  /**
   * update
   * 
   * @param {Todo} todo 
   * @returns {Promise<number>}
   */
  async update(todo) {
    try {
      await this.open();
      const count = await this._update(todo);
      return count;
    } catch (err) {
      throw err;
    } finally {
      this.close();
    }
  }

  /**
   * update
   * 
   * @private
   * @param {Todo} todo 
   * @returns {Promise<number>}
   */
  _update(todo) {
    return new Promise((resolve, reject) => {
      this.db.run(`update todoes set title = $title, done = $done where id = $id`,
        { $title: todo.title, $done: todo.done ? 1 : 0, $id: todo.id },
        (err, count) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(count);
        }
      );
    });
  }

  /**
   * delete todo
   * 
   * @param {number} id 
   * @returns {Promise<number>}
   */
  async remove(id) {
    try {
      await this.open();
      const count = await this._remove(id);
      return count;
    } catch (err) {
      throw err;
    } finally {
      this.close();
    }
  }

  /**
   * delete
   * 
   * @private
   * @param {number} id todo id
   * @returns {Promise<number>}
   */
  _remove(id) {
    return new Promise((resolve, reject) => {
      this.db.run(`delete from todoes where id = $id`,
        { $id: id },
        (err, count) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(count);
        }
      );
    });
  }
}

/**
 * open database & create database
 * 
 * @returns {Promise<object>} sqlite3.Database
 */
function openDatabase() {
  return new Promise((resolve, reject) => {
    const db = new sqlite.Database(path.resolve("./todoes.db"),
      () => {
        // create table
        db.run(`create table if not exists todoes (
          id integer primary key autoincrement,
          title text,
          done integer not null default 0 check(done in (0, 1)),
          created text not null default current_date
        )`, (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(db);
        });
      }
    );
  });
}

module.exports = TodoModel;
