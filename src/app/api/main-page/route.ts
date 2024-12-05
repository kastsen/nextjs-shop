import {NextResponse} from "next/server";

export async function GET() {
    try {
        const data = {
            title: "Data to enrich your online business",
        };
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error in GET /api/data:', error);
        return NextResponse.error();
    }
}
