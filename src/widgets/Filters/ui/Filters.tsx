'use client';

import {cn} from "@/shared/lib/utils";
import {Input, Slider, Title} from "@/shared/ui";
import {FilterItem, FiltersGroup} from "@/entities/FiltersGroup";
import {useFilter} from "@/shared/hooks/useFilter";
import {useEffect} from "react";
import qs from "qs";
import {useRouter} from "next/navigation";

interface FiltersProps {
    className?: string;
    ingredients?: FilterItem[];
}

export const Filters = ({ingredients, className}: FiltersProps) => {
    const {
        ingredientItems,
        sizeItems,
        priceFrom,
        priceTo,
        filterData,
        addSizeFilterItems,
        addIngredientsFilterItems,
        updatePrice,
    } = useFilter();
    
    const router = useRouter();
    
    useEffect(() => {
        const queryString = qs.stringify(filterData, {arrayFormat: 'comma'});
        
        router.push(`?${queryString}`, {
            scroll: false,
        })
    }, [ingredientItems, sizeItems, priceFrom, priceTo]);
    
    return (
        <div className={cn('flex flex-col gap-5', className)}>
            <Title text="Фильтрация" size={'sm'} className={'font-bold'}/>
            <div className={'flex flex-col gap-6'}>
                <FiltersGroup
                    title={'Размер:'}
                    defaultItems={[
                        {id: 100, text: '20см', value: '20', name: '20см'},
                        {id: 101, text: '25см', value: '25', name: '25см'},
                        {id: 102, text: '30см', value: '30', name: '30см'},
                        {id: 103, text: '35см', value: '35', name: '35см'},
                    ]}
                    items={[
                        {id: 100, text: '20см', value: '20', name: '20см'},
                        {id: 101, text: '25см', value: '25', name: '25см'},
                        {id: 102, text: '30см', value: '30', name: '30см'},
                        {id: 103, text: '35см', value: '35', name: '35см'},
                    ]}
                    onChange={(item: number) => addSizeFilterItems(item)}
                    filterItems={sizeItems}
                />
                <div className={'flex flex-col gap-4 py-6 border-y border-y-neutral-100'}>
                    <p className={'font-bold'}>Цена от и до:</p>
                    <div className={'flex gap-3'}>
                        <Input
                            type={"number"}
                            min={0}
                            max={priceTo}
                            value={priceFrom || 0}
                            name={'priceValue'}
                            placeholder={'0'}
                            onChange={(evt) => updatePrice('priceFrom', Number(evt.target.value))}
                        />
                        <Input
                            type={"number"}
                            min={100}
                            max={5000}
                            value={priceTo || 5000}
                            name={'priceValue'}
                            placeholder={`${priceTo}`}
                            onChange={(evt) => updatePrice('priceTo', Number(evt.target.value))}
                        />
                    </div>
                    <Slider
                        min={0}
                        max={5000}
                        step={10}
                        defaultValue={[0, 5000]}
                        value={[priceFrom || 0, priceTo || 5000]}
                        onValueChange={(value) => {
                            const [priceFrom, priceTo] = value as number[];
                            updatePrice('priceFrom', priceFrom)
                            updatePrice('priceTo', priceTo)
                        }}
                        className={'mx-auto w-full max-w-xs'}
                    />
                </div>
                {
                    ingredients && (
                        <FiltersGroup
                            title={'Ингредиенты:'}
                            defaultItems={ingredients}
                            items={ingredients}
                            onChange={(item: number) => addIngredientsFilterItems(item)}
                            filterItems={ingredientItems}
                        />
                    )
                }
            </div>
        </div>
    );
}
