import mongoose from "mongoose";

export async function connect () {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfuly');
        })
        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running' + err);
        })

    } catch (error) {
        console.log('something gone wrong!')
        console.log(error)


    }
}