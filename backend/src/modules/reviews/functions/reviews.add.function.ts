import { RequestHandler } from "express";
import ReviewModel from "../reviews.model";
export const addReview: RequestHandler = async (req, res, next) => {
    const {text, rate, building, user_id} = req.body;
    try {
        const newReview = await ReviewModel.create({
            text: text,
            rate: rate,
            building: building,
            reviewer: user_id
        });
        res.status(200).json(newReview);
    } catch (error) {
        next(error);
    }
}