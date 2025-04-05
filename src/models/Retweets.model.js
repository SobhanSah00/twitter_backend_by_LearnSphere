import mongoose, {Schema} from "mongoose";

const RetweetSchema = new Schema({
    tweet : {
        type: Schema.Types.ObjectId,
        ref: 'Tweet',
        required: true
    },
    owner : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamps: true
})

export default Retweet = mongoose.model("Retweet",RetweetSchema)