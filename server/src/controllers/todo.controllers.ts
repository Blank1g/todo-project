import { Request, Response } from "express";

import { AppDataSource } from "../data-source";
import { User } from "../entity/User.entity";
import { Todo } from "../entity/Todo.entity";
import { UploadService } from "../services/upload.service";

export class TodoController {
    static async getTodos(req: any, res: Response) {
        try {
            const userRepository = AppDataSource.getRepository(User);

            const user = await userRepository.findOne({
                where: { id: req[" currentUser"].id },
                relations: ["todo"],
            });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            return res.status(200).json(user.todo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getTodoById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "Id is required" });
            }

            const todoRepository = AppDataSource.getRepository(Todo);

            const todo = await todoRepository.findOne({
                where: { id },
            });

            if (!todo) {
                return res.status(404).json({ message: "Todo not found" });
            }

            return res.status(200).json(todo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    static async createTodo(req: any, res: Response) {
        try {
            const { title, description } = req.body;

            if (!title || !description) {
                return res.status(400).json({ message: "Title and description are required" });
            }

            const todoRepository = AppDataSource.getRepository(Todo);
            const userRepository = AppDataSource.getRepository(User);

            const user = await userRepository.findOne({
                where: { id: req[" currentUser"].id },
            });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const todo = new Todo();
            todo.title = title;
            todo.description = description;
            todo.user = user;

            const newTodo = await todoRepository.save(todo);

            return res.status(201).json(newTodo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateTodoById(req: Request, res: Response) {
        try {
            const { id, title, description } = req.body;

            if (!id) {
                return res.status(400).json({ message: "Id is required" });
            }

            if (!title || !description) {
                return res.status(400).json({ message: "Title and description are required" });
            }

            const todoRepository = AppDataSource.getRepository(Todo);

            const todo = await todoRepository.findOne({
                where: { id },
            });

            if (!todo) {
                return res.status(404).json({ message: "Todo not found" });
            }

            todo.title = title;
            todo.description = description;

            const newTodo = await todoRepository.save(todo);

            return res.status(200).json(newTodo);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    static async deleteTodoById(req: Request, res: Response) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "Id is required" });
            }

            const todoRepository = AppDataSource.getRepository(Todo);

            const todo = await todoRepository.findOne({
                where: { id },
            });
            
            if (!todo) {
                return res.status(404).json({ message: "Todo not found" });
            }

            await todoRepository.remove(todo);

            return res.status(200).json({ message: "Todo deleted successfully" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    static async uploadFile(req: Request, res: Response) {
        try {
            return UploadService.uploadFile(req, res);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}