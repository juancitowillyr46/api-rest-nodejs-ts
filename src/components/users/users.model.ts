import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String
});

export default mongoose.model('User', User);
