const TodoModel = require("../models/TodoModel");
const Todo = require("../models/Todo");

/**
 * Add a new todo
 * 
 *
 * body Todo Todo object that needs to be added to the db
 * no response value expected for this operation
 **/
exports.addTodo = async function(body) {
  const model = new TodoModel();
  const todo = new Todo(body.title, 0, body.done);
  await model.create(todo);
}


/**
 * Deletes a todo
 * 
 *
 * todoId Long Todo id to delete
 * no response value expected for this operation
 **/
exports.deleteTodo = async function(todoId) {
  const model = new TodoModel();
  await model.remove(todoId);
}


/**
 * Find todo by ID
 * Returns a single todo
 *
 * todoId Long ID of pet to return
 * returns Todo
 **/
exports.getTodoById = async function(todoId) {
  const model = new TodoModel();
  const todo = await model.getTodoById(todoId);
  return todo;
}


/**
 * Get all todos
 * 
 *
 * returns List
 **/
exports.getTodos = async function() {
  const model = new TodoModel();
  const list = await model.getAll();
  return list;
}


/**
 * Update an existing todo
 * 
 *
 * body Todo Todo object that needs to be added to the db
 * no response value expected for this operation
 **/
exports.updateTodo = async function(body) {
  const model = new TodoModel();
  const todo = new Todo(
    body.title,
    body.id,
    body.done
  );
  await model.update(todo);
}


/**
 * Updates a todo in the store with form data
 * 
 *
 * todoId Long ID of todo that needs to be updated
 * title String Updated title of the todo
 * done Boolean Updated status of the todo (optional)
 * no response value expected for this operation
 **/
exports.updateTodoWithForm = async function(todoId,title,done) {
  const model = new TodoModel();
  const todo = new Todo(title, todoId, done);
  await model.update(todo);
}

