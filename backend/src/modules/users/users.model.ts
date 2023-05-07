import { InferSchemaType, model, Schema } from "mongoose";
import isEmail from 'validator/lib/isEmail';
const userSchema = new Schema({
    email: {
        type: String,
        required: [true,'Please enter email.'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'email invalid']
    },
    password: {
        type: String,
        required: [true,'Please enter password.'],
        minlength: 6
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        default: "reviewer",
        required: true,
        enum: ["reviewer", "admin", "provider" ]
    }
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);