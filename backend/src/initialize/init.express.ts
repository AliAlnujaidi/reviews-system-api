import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";


const app = express();
app.use(express.json());


//import routers
import userRouter from "../modules/users/users.routes"
import reviewRouter from "../modules/reviews/reviews.routes"
app.use("/api",userRouter);
app.use("/api",reviewRouter);

app.use((req,res,next) =>{
    next(Error("Endpoint not found"))
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) =>{
    console.error(error);
    let errorMessage = "An error occured, try again";
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({error: errorMessage})
});

export = app;