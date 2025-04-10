// lib/db.ts
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/dental-follow-up')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

export default mongoose;
