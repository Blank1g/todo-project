import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET } = process.env;

export const authentification = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  const token = header.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  
  const decode = jwt.verify(token, JWT_SECRET!);
  if (!decode) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.currentUser = decode;
  next();
};