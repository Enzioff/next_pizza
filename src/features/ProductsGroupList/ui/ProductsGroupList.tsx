'use client';

import {cn} from "@/shared/lib/utils";
import {IProductCard, ProductCard} from "@/entities/ProductCard";
import {Title} from "@/shared/ui";
import {useEffect, useRef} from "react";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/store";

interface ProductsGroupListProps {
    title: string;
    products: IProductCard[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList = ({title, products, categoryId, listClassName, className}: ProductsGroupListProps) => {
    const intersectionRef = useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveCategory);
    
    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting])
    
    return (
        <div id={title} ref={intersectionRef} className={cn('flex flex-col gap-4', className)}>
            <Title text={title} size={'lg'} className={'font-extrabold'}/>
            <div className={cn('grid grid-cols-3 gap-12', listClassName)}>
                {
                    products && products.map((product: IProductCard) => (
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            key={product.id}
                        />
                    ))
                }
            </div>
        </div>
    );
}
