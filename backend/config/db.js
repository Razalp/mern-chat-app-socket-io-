const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    } catch (error) {
        console.log('error db connection')
        process.exit();
        console.log(error)
    }
}

module.exports=connectDB;