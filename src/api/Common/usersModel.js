import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    emailid: {
        type: String
    },
    address: {
        type: String
    }
},
    {
        timestamps: true
    });

const usersModel = mongoose.model('users', usersSchema)

export default usersModel