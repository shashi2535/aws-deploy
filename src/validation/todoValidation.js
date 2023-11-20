const joi = require("joi");

const createTodoValidation = (req, res, next) => {
  const validateTodo = (data) => {
    const todoSchema = joi.object({
      title: joi.string().required(),
      description: joi.string().required(),
    });
    return todoSchema.validate(data);
  };
  const { error } = validateTodo(req.body);
  if (error) {
    return res.json({
      status_code: 400,
      message: error.message,
    });
  } else {
    next();
  }
};

module.exports = { createTodoValidation };
