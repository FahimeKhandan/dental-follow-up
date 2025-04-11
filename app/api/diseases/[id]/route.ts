// app/api/diseases/route.ts
import { NextResponse } from 'next/server';
import { Disease } from '@/lib/models/Disease';
import '@/lib/db';
import { connectDB } from '@/lib/db';

export async function GET() {
    try {
         await connectDB();
        const diseases = await Disease.find();
        console.log('Fetched diseases:', diseases);
        return NextResponse.json(diseases);
    } catch (err) {
        console.error('Error fetching diseases:', err);
        return NextResponse.json({ message: 'Failed to fetch diseases', error: err.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const ids = await request.json();
        console.log('Received IDs:', ids);
        const diseases = await Disease.find({ _id: { $in: ids } });
        console.log('Fetched diseases by IDs:', diseases);
        return NextResponse.json(diseases);
    } catch (err) {
        console.error('Error fetching diseases by IDs:', err);
        return NextResponse.json({ message: 'Failed to fetch diseases', error: err.message }, { status: 500 });
    }
}
