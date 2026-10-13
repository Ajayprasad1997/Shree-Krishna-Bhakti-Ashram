
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Google Places API configuration missing" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        method: "GET",
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "displayName,rating,userRatingCount,reviews,googleMapsUri",
        },
        next: { revalidate: 3600 },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Google Places API error:", data);
      return NextResponse.json(
        { error: "Unable to fetch Google reviews" },
        { status: response.status }
      );
    }

    return NextResponse.json({
      name: data.displayName?.text || "Shree Krishna Bhakti Ashram",
      rating: data.rating ?? null,
      totalReviews: data.userRatingCount ?? 0,
      googleMapsUri: data.googleMapsUri || "",
      reviews: (data.reviews || []).map((review) => ({
        name: review.authorAttribution?.displayName || "Google User",
        photo: review.authorAttribution?.photoUri || "",
        rating: review.rating ?? 0,
        text: review.text?.text || "",
        date: review.relativePublishTimeDescription || "",
        url: review.authorAttribution?.uri || "",
      })),
    });
  } catch (error) {
    console.error("Reviews API error:", error);

    return NextResponse.json(
      { error: "Something went wrong fetching reviews" },
      { status: 500 }
    );
  }
}
