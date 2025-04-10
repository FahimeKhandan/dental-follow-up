// lib/models/Disease.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IDisease extends Document {
    name: string;
    description: string;
}

const diseaseSchema = new Schema({
    name: String,
    description: String
});

export const Disease = mongoose.models.Disease || mongoose.model<IDisease>('Disease', diseaseSchema);
