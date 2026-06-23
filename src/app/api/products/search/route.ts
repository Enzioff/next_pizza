import {prisma} from "../../../../../prisma/prisma_client";
import {NextRequest} from "next/server";

export async function GET(req: NextRequest) {
    const query = await req.nextUrl.searchParams.get('query') || '';
    const limit = await req.nextUrl.searchParams.get('_limit') || 5;
    
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive'
            }
        },
        take: Number(limit)
    })
    
    return Response.json(products);
}
