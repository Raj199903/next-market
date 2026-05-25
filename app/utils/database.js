import mongoose from "mongoose"

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/nextAppDatabase")
        console.log("Success: Connected to MongoDB")
    }catch{
        console.log("Failure: Unconnected to MongoDB")
    }
}
    export default connectDB