import { InferSchemaType, model, Schema } from "mongoose";

const reviewSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    building:{
        type: Number,
        required: true,
    },
    reviewer:{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    }
},{ timestamps: true });

type Review = InferSchemaType<typeof reviewSchema>;

export default model<Review>("Review", reviewSchema);