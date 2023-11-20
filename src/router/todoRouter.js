const express = require("express");
const todoRouter = express.Router();
const { todoController } = require("../controller");
const { todoValidation } = require("../validation");
todoRouter.post(
  "/todo",
  todoValidation.createTodoValidation,
  todoController.createTodo
);

todoRouter.get("/todo", todoController.getTodo);
todoRouter.get("/home", (req,res)=>{
return res.json({
  status:true,
  message:"hello from cicd pipeline"
})
});

module.exports = {
  todoRouter,
};
