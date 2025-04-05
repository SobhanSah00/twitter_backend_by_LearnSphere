import mongoose, { Schema } from "mongoose";

const TweetSchema = new Schema({
    owner : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    content : {
        type : String,
    },
    media : [
        {
            type : String
        }
    ],
    likeCount : {
        type : Number,
        default : 0
    },
    commentCount : {
        type : Number,
        default : 0
    },
    retweetCount : {
        type : Number,
        default : 0
    }
},{
    timestamps : true
})

export default Tweet = mongoose.model("Tweet", TweetSchema)