import * as express from "express";

import { authentification } from "../middleware/authentification";
import { TodoController } from "../controllers/todo.controllers";
import multer from 'multer';

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

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

Router.post(
    "/upload/:id",
    [authentification, upload.single('file')],
    TodoController.uploadFile
);


export { Router as todoRoutes };