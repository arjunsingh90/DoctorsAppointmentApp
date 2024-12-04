import mongoose from "mongoose";

const connectDB = async () => {
  // Event listener for successful connection
  mongoose.connection.on('connected', () => console.log("Database Connected"));

  // Correct connection string without the database name in the URL path
  await mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
