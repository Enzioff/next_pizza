import {prisma} from "../../../../prisma/prisma_client";

export async function GET() {
    const category = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    productVariants: true
                }
            }
        }
    })
    
    return Response.json(category);
}
