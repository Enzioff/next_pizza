'use client';

import {cn} from "@/shared/lib/utils";
import {Category} from "@/shared/ui";
import {useEffect, useState} from "react";
import {useCategoryStore} from "@/store";

interface CategoriesProps {
    className?: string;
}

const categories = [
    { id: 1, name: 'Пиццы' },
    { id: 2, name: 'Завтраки' },
    { id: 3, name: 'Острые' },
    { id: 4, name: 'Сладкие' },
    { id: 5, name: 'Вегетарианские' },
    { id: 5, name: 'С курицей' },
];

export const Categories = ({className}: CategoriesProps) => {
    const activeCategoryId = useCategoryStore((state) => state.activeCategoryId);
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveCategory);
    
    const handleClick = (idx: number) => {
        setActiveCategoryId(idx);
    }
    
    return (
        <div className={cn('flex items-center gap-1 p-1.5 rounded-2xl bg-gray-50', className)}>
            {
                categories.map((item, idx) => (
                    <Category
                        onClick={() => handleClick(idx)}
                        key={item.name}
                        name={item.name}
                        className={cn(idx === activeCategoryId && 'bg-white shadow-md shadow-gray-200 text-primary transition duration-150')}
                    >
                        {item.name}
                    </Category>
                ))
            }
        </div>
    );
}
