import {prisma} from "../../../../prisma/prisma_client";

export async function GET() {
    const ingredients = await prisma.ingredient.findMany();
    
    return Response.json(ingredients);
}
