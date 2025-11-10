import mongoose from "mongoose";
const connectDB= async ()=>{
    mongoose.connection.on('connected',()=> {
       console.log("db connected") 
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/NoBack`)
}
export default connectDB