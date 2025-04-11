// lib/db.ts
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://atlas-sample-dataset-load-67f7d1863bf91c30aa662852:Hacj69T0JjJVqg9i@cluster0.3iw0el3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));

export default mongoose;
