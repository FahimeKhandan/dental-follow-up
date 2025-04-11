import { Disease } from '@/lib/models/Disease';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const diseases = await Disease.find();
        return NextResponse.json(diseases);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Failed to fetch diseases' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const ids = await request.json();
        const diseases = await Disease.find({ _id: { $in: ids } });
        return NextResponse.json(diseases);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Failed to fetch diseases' }, { status: 500 });
    }
}
