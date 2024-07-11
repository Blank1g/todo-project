import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { Request, Response } from "express";

import { Todo } from "../entity/Todo.entity";
import { AppDataSource } from '../data-source';

const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY } = process.env;

export class UploadService {

    static s3Client = new S3Client({
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY!,
            secretAccessKey: AWS_SECRET_ACCESS_KEY!
        },
    });

    static async uploadFile(req: Request, res: Response) {
        if (!req.file) {
            res.status(400).send('No file uploaded');
            return;
        }

        const todoId = req.params.id;
        const fileName = req.file.originalname;

        const params = {
          Bucket: 'todo-app-blank',
          Key: fileName,
          Body: req.file.buffer,
        };
      
        try {
            const todoRepository = AppDataSource.getRepository(Todo);
            
            const todo = await todoRepository.findOne({
                where: { id: todoId },
            });

            if (!todo) {
                return res.status(404).json({ message: "Todo not found" });
            }

            await UploadService.s3Client.send(new PutObjectCommand(params));
            
            const fileUrl = `https://todo-app-blank.s3.amazonaws.com/${fileName}`;

            todo.fileUrl = fileUrl;
            await todoRepository.save(todo);
            
            console.log('File uploaded successfully');
            return res.status(200).send('File uploaded');
        } catch (err) {
            console.error(err);
            return res.status(500).send('Failed to upload file');
        }
    };
 
}