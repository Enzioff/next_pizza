'use client';

import {useState} from "react";
import {useSearchParams} from "next/navigation";

export interface IFilter {
    addIngredientsFilterItems: (item: number) => void;
    addSizeFilterItems: (item: number) => void;
    updatePrice: (name: keyof PriceProps, value: number) => void;
    ingredientItems: Set<number>;
    sizeItems: Set<number>;
    priceFrom?: number;
    priceTo?: number;
    filterData: {
        productSize: number[];
        ingredientItems: number[];
        priceFrom?: number;
        priceTo?: number
    }
}

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

const useFilter = (): IFilter => {
    const searchParams = useSearchParams();
    const getDataFromQueryString = (name: string) => {
        return searchParams?.get(name)
            ? searchParams?.get(name)?.split(',').map(el => Number(el))
            : []
    }
    
    const [ingredientItems, setIngredientItems] = useState(new Set<number>(getDataFromQueryString('ingredientItems')));
    const [sizeItems, setSizeItems] = useState(new Set<number>(getDataFromQueryString('productSize')));
    const [{priceFrom, priceTo}, setPrice] = useState<PriceProps>({
        priceFrom: Number(searchParams?.get('priceFrom')) || undefined,
        priceTo: Number(searchParams?.get('priceTo')) || undefined
    });
    
    const addIngredientsFilterItems = (item: number) => {
        setIngredientItems((els) => {
            const next = new Set<number>(els);
            if (next.has(item)) {
                next.delete(item)
            } else {
                next.add(item)
            }
            return next;
        })
    }
    
    const addSizeFilterItems = (item: number) => {
        setSizeItems((els) => {
            const next = new Set<number>(els);
            if (next.has(item)) {
                next.delete(item)
            } else {
                next.add(item)
            }
            return next;
        })
    }
    
    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice((prevState) => {
            const newState = {...prevState};
            newState[name] = value;
            return newState;
        });
    }
    
    const filterData = {
        productSize: sizeItems.values().toArray(),
        ingredientItems: ingredientItems.values().toArray(),
        priceFrom,
        priceTo,
    }
    
    return {
        addIngredientsFilterItems,
        addSizeFilterItems,
        updatePrice,
        ingredientItems,
        sizeItems,
        priceFrom,
        priceTo,
        filterData
    }
}

export {
    useFilter
};

