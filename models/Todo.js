// Todo
class Todo {
  /**
   * 
   * @param {string} title 
   * @param {number} [id]
   * @param {boolean} [done]
   * @param {string} [created]
   */
  constructor(title, id=0, done=false, created="") {
    this.id = id;
    this.title = title;
    this.done = done;
    this.created = created;
  }
}

module.exports = Todo;