import mongoose, { model, Schema } from "mongoose";

const CommentSchema = new Schema({
    tweet : {
        type : Schema.Types.ObjectId,
        ref : 'Tweet',
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    content : {
        type : String,
        required : true
    },
},{
    timestamps : true
})

export default Comment = mongoose.model("Comment",CommentSchema)