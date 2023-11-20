const { Todo } = require("../models");

exports.createTodo = async (req, res) => {
  try {
    console.log("in createTodo function");
    const { title, description } = req.body;
    const todoData = await Todo.create({
      title: title?.trim(),
      description: description?.trim(),
    });
    return res.json({
      status_code: 200,
      message: "Todo Created Successfully",
      data: todoData,
    });
  } catch (err) {
    return res.json({
      status_code: 500,
      message: err.message,
    });
  }
};


exports.getTodo = async (req, res) => {
  try {
    console.log("in getTodo function");
    const todoData = await Todo.find()
    return res.json({
      status_code: 200,
      message: "Get Todo List Successfully",
      data: todoData,
    });
  } catch (err) {
    return res.json({
      status_code: 500,
      message: err.message,
    });
  }
};
