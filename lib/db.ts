
// lib/db.ts
import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB() {
    console.log('MongoDB URI:', process.env.MONGODB_URI);
    if (isConnected) return;

    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}