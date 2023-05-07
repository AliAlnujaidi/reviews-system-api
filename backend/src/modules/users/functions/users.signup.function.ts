import { RequestHandler } from "express";
import UserModel from "../users.model";
import bcrypt from "bcrypt";
import { createJWT } from "../../../helpers/access.control.middleware";
export const signUp: RequestHandler = async (req, res, next) => {
    const { email, password, first_name, last_name } = req.body;
    try {
        const checkUser = await UserModel.findOne({ email: email }).exec();

        if (checkUser) {
            res.json({ error: "email already registered" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({
            email: email,
            password: hashedPassword,
            first_name: first_name,
            last_name: last_name
        })
        const token = createJWT(newUser._id)

        res.status(200).json({newUser, access_token: token});
    } catch (error) {
        next(error);
    }
}