import {Prisma} from "@/generated/prisma";

export type ProductType = Prisma.ProductGetPayload<{
    include: {
        productVariants: true
    }
}>
