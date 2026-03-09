import { NextResponse } from 'next/server';

export async function GET() {
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;

    if (!API_KEY || !PLACE_ID) {
        return NextResponse.json({ error: 'Google Places API keys are not configured in environment variables' }, { status: 500 });
    }

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${API_KEY}`,
            { next: { revalidate: 3600 } } // Cache for 1 hour
        );
        const data = await response.json();

        if (data.result) {
            return NextResponse.json({
                reviews: data.result.reviews || [],
                rating: data.result.rating || null,
                totalRatings: data.result.user_ratings_total || null
            });
        }

        return NextResponse.json({ error: 'No results found' }, { status: 404 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
    }
}
