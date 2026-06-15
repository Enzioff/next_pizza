'use client';

import {cn} from "@/shared/lib/utils";
import {Category} from "@/shared/ui";
import {useState} from "react";

interface CategoriesProps {
    className?: string;
}

const categories = [
    { id: 1, name: 'Все' },
    { id: 2, name: 'Мясные' },
    { id: 3, name: 'Острые' },
    { id: 4, name: 'Сладкие' },
    { id: 5, name: 'Вегетарианские' },
    { id: 5, name: 'С курицей' },
];

export const Categories = ({className}: CategoriesProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    
    const handleClick = (idx: number) => {
        setActiveIndex(idx);
    }
    
    return (
        <div className={cn('flex items-center gap-1 p-1.5 rounded-2xl bg-gray-50', className)}>
            {
                categories.map((item, idx) => (
                    <Category
                        onClick={() => handleClick(idx)}
                        key={item.name}
                        className={cn(idx === activeIndex && 'bg-white shadow-md shadow-gray-200 text-primary transition duration-150')}
                    >
                        {item.name}
                    </Category>
                ))
            }
        </div>
    );
}
