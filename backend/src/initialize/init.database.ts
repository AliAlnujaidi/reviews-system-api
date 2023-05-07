import mongoose from "mongoose";
import env from './init.env';

function dbConnection() {
    return new Promise((resolve, reject) => {
        mongoose.connect(env.MONGO_LOCAL_URI, {})
            .then(() => {
                console.log('Mongoose connected');
                resolve({ success: true });
            })
            .catch((err) => {
                console.log(err)
                reject(err);
            })
    })
}

export = dbConnection;
