import mongoose, { Schema } from "mongoose";

const LikeSchema = new Schema({
    tweet : {
        type : Schema.Types.ObjectId,
        ref : 'Tweets'
    },
    likedBy : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

export default Like = mongoose.model("Like", LikeSchema)