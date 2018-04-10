'use strict';


/**
 * Add a new todo
 * 
 *
 * body Todo Todo object that needs to be added to the db
 * no response value expected for this operation
 **/
exports.addTodo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a todo
 * 
 *
 * todoId Long Todo id to delete
 * no response value expected for this operation
 **/
exports.deleteTodo = function(todoId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find todo by ID
 * Returns a single todo
 *
 * todoId Long ID of pet to return
 * returns Todo
 **/
exports.getTodoById = function(todoId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0.80082819046101150206595775671303272247314453125,
  "title" : "title",
  "done" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all todos
 * 
 *
 * returns List
 **/
exports.getTodos = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0.80082819046101150206595775671303272247314453125,
  "title" : "title",
  "done" : true
}, {
  "id" : 0.80082819046101150206595775671303272247314453125,
  "title" : "title",
  "done" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing todo
 * 
 *
 * body Todo Todo object that needs to be added to the db
 * no response value expected for this operation
 **/
exports.updateTodo = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a pet in the store with form data
 * 
 *
 * todoId Long ID of todo that needs to be updated
 * title String Updated title of the todo
 * done Boolean Updated status of the todo (optional)
 * no response value expected for this operation
 **/
exports.updateTodoWithForm = function(todoId,title,done) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

