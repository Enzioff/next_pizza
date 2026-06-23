'use client';

import {cn} from "@/shared/lib/utils";
import {ProductCard} from "@/entities/ProductCard";
import {Title} from "@/shared/ui";
import {RefObject, useEffect, useRef} from "react";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/store";
import {Prisma, Product} from "@/generated/prisma";

type ProductsType = Prisma.ProductGetPayload<{
    include: {
        productVariants: true
    }
}>;

interface ProductsGroupListProps {
    title: string;
    products: ProductsType[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList = ({title, products, categoryId, listClassName, className}: ProductsGroupListProps) => {
    const intersectionRef = useRef<RefObject<HTMLElement> | null>(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
        rootMargin: '-100px'
    })
    
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveCategory);
    
    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting])
    
    return (
        <div id={title} ref={intersectionRef} className={cn('flex flex-col gap-4', className)} style={{scrollMarginTop: '100px'}}>
            <Title text={title} size={'lg'} className={'font-extrabold'}/>
            <div className={cn('grid grid-cols-3 gap-12', listClassName)}>
                {
                    products && products.map((product: ProductsType) => (
                        <ProductCard
                            key={product.id}
                            id={`${product.id}`}
                            imageUrl={product.imageUrl}
                            name={product.name}
                            price={product.productVariants[0].price}
                        />
                    ))
                }
            </div>
        </div>
    );
}
