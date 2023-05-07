import jwt from "jsonwebtoken";
import env from "../initialize/init.env";

export const createJWT = (id) => {
    return jwt.sign({ id }, env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
    })
}

export const requireLogin = (req, res, next) => {
    const { access_token, user_id } = req.body;
    if (access_token) {
        jwt.verify(access_token, env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                return res.json({ error: 'your token is not valid' });
            } else {
                if (user_id == decodedToken.id) {
                    next();
                } else {
                    return res.json({ error: 'your id does not match this token, please re-login' });
                }
            }
        });

    } else {
        return res.json({ error: 'you have no token' });
    }

}