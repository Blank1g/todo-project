import * as express from "express";

import { authentification } from "../middleware/authentification";
import { TodoController } from "../controllers/todo.controllers";

const Router = express.Router();

Router.get(
    "",
    authentification,
    TodoController.getTodos
);
Router.get(
    "/:id",
    authentification,
    TodoController.getTodoById
);
Router.post(
    "",
    authentification,
    TodoController.createTodo
);
Router.put(
    "",
    authentification,
    TodoController.updateTodoById
);
Router.delete(
    "/:id",
    authentification,
    TodoController.deleteTodoById
);

export { Router as todoRoutes };