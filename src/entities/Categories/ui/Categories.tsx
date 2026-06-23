'use client';

import {cn} from "@/shared/lib/utils";
import {useCategoryStore} from "@/store";
import {Prisma} from "@/generated/prisma";
import {Category} from "@/shared/ui";

interface CategoriesProps {
    className?: string;
    categories?: Prisma.CategoryGetPayload<{
        include: {
            products: true
        }
    }>[];
}

export const Categories = ({categories, className}: CategoriesProps) => {
    const activeCategoryId = useCategoryStore((state) => state.activeCategoryId);
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveCategory);
    
    const handleClick = (idx: number) => {
        setActiveCategoryId(idx);
    }
    
    return (
        <div className={cn('flex items-center gap-1 p-1.5 rounded-2xl bg-gray-50', className)}>
            {
                categories && categories.length > 0 && categories.filter((category) => category.products.length > 0).map((category) => (
                    <Category
                        onClick={() => handleClick(category.id)}
                        key={category.name}
                        name={category.name}
                        className={cn(category.id === activeCategoryId && 'bg-white shadow-md shadow-gray-200 text-primary transition duration-150 scroll-p-10')}
                    >
                        {category.name}
                    </Category>
                ))
            }
        </div>
    );
}
