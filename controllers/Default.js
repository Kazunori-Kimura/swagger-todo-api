'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.addTodo = function addTodo (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.addTodo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTodo = function deleteTodo (req, res, next) {
  var todoId = req.swagger.params['todoId'].value;
  Default.deleteTodo(todoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTodoById = function getTodoById (req, res, next) {
  var todoId = req.swagger.params['todoId'].value;
  Default.getTodoById(todoId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTodos = function getTodos (req, res, next) {
  Default.getTodos()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTodo = function updateTodo (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.updateTodo(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTodoWithForm = function updateTodoWithForm (req, res, next) {
  var todoId = req.swagger.params['todoId'].value;
  var title = req.swagger.params['title'].value;
  var done = req.swagger.params['done'].value;
  Default.updateTodoWithForm(todoId,title,done)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
