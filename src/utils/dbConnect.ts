import mongoose, { Mongoose } from 'mongoose'
import { DB } from '../config/variables'

// @ts-ignore
let globalMongoose: any = global.mongoose;

if (!globalMongoose) {
    // @ts-ignore
    globalMongoose = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
    if (globalMongoose.conn) {
        console.log('already connected')
        return globalMongoose.conn
    }
    if (!globalMongoose.promise) {
        globalMongoose.promise = mongoose.connect(DB).then((mongoose) => {
            console.log('connected to db')
            return mongoose
        })
    }
    globalMongoose.conn = await globalMongoose.promise
    return globalMongoose.conn
}

export default dbConnect