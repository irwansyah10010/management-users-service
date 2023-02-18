import mongoose from "mongoose"

const User = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    accountNumber:{
        type:Number,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    identityNumber:{
        type:Number,
        required:true,
        unique:true
    }
})

export default mongoose.model('user',User)