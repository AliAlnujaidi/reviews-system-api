import { RequestHandler } from "express";
import ReviewModel from "../reviews.model";
export const getReviews: RequestHandler = async (req, res, next) => {
    try {
        const reviews = await ReviewModel.find()
        .populate({path:'reviewer', select:'first_name last_name'})
        .exec()
        res.status(200).json(reviews);
    } catch (error) {
        next(error);
    }

}