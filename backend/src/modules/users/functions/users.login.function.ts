import { RequestHandler } from "express";
import UserModel from "../users.model";
import bcrypt from "bcrypt";
import { createJWT } from "../../../helpers/access.control.middleware";
export const loginUser: RequestHandler = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email }).exec();

        if (user) {
            const auth = await bcrypt.compare(password, user.password);
            if(auth){
                const access_token = createJWT(user.id);
                return res.status(200).json({user_id:user.id, access_token})
            }
            throw Error('Incorrect password')
        }
        throw Error('Incorrect Email.')

    } catch (error) {
        next(error);
    }
}