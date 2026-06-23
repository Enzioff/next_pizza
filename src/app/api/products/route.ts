import {prisma} from "../../../../prisma/prisma_client";

export async function GET(request: Request) {
    const productUrl = new URL(request.url);
    const productId = productUrl.searchParams.get('id');
    
    const product = await prisma.product.findUnique({
        where: {
            id: Number(productId),
        },
        include: {
            category: true,
            productVariants: true,
        }
    });
    
    
    console.log('product', product);
    
    return Response.json(product);
}
