import mongoose from 'mongoose';

export async function MongoConnect() {
    try {
        await mongoose.connect('mongodb+srv://tester:8of2eqq82O6rHPjj@news.uomzwrf.mongodb.net');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}