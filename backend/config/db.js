import mongoose from "mongoose"



export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://antonikingstonroi_db_user:vfZ2KcRe0XZQBUuM@cluster0.tdmh4uw.mongodb.net/Quiz-app')
    .then (()=>{console.log('DB is connected')})
}