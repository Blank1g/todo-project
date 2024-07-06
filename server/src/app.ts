import express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import "reflect-metadata";

import { AppDataSource } from "./data-source";
import { userRouter } from "./routes/user.routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
app.use(express.json());
app.use(errorHandler);
const { PORT = 3000 } = process.env;
app.use("/auth", userRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

let retries = 10;
(async ()=>{
  while (retries) {
    try {
     await AppDataSource.initialize()
        .then(async () => {
          app.listen(PORT, () => {
            console.log("Server is running on http://localhost:" + PORT);
          });
          console.log("Data Source has been initialized!");
        })
  
        break;
    } catch (error) {
      console.log(error);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
})();