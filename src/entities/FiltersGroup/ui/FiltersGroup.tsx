'use client';

import {cn} from "@/shared/lib/utils";
import {FilterCheckbox, Input} from "@/shared/ui";
import {Activity, ChangeEvent, useState} from "react";

interface FilterItem {
    text: string;
    value: string;
    name: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

interface FiltersGroupProps {
    title: string;
    items: FilterItem[];
    defaultItems: FilterItem[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (values: string[]) => void;
    defaultValue?: string;
    className?: string;
}

export const FiltersGroup = (
    {
        title,
        items,
        defaultItems,
        limit = 6,
        searchInputPlaceholder = 'Поиск...',
        onChange,
        defaultValue,
        className
    }: FiltersGroupProps) => {
    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    
    const onChangeSearchValue = (evt: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(evt.target.value);
    }
    
    const limitList = showAll
        ? items.filter(el => el.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0, limit);
    
    return (
        <div className={cn('flex flex-col items-start gap-4', className)}>
            <p className={'font-bold '}>{title}</p>
            <Activity mode={showAll ? 'visible' : 'hidden'}>
                <Input
                    onChange={onChangeSearchValue}
                    placeholder={searchInputPlaceholder}
                    className={'bg-gray-50 border-none'}
                />
            </Activity>
            <div className={'flex flex-col gap-4 max-h-96 pr-2 w-[100%] overflow-auto scrollbar'}>
                {
                    limitList && limitList.map((item) => (
                        <FilterCheckbox
                            onCheckedChange={(idx) => console.log('idx', idx)}
                            text={item.text}
                            value={item.value}
                            name={item.name}
                            key={item.text}
                            checked={false}
                            endAdornment={item.endAdornment}
                        />
                    ))
                }
            </div>
            {
                items && items.length > limit && (
                    <button onClick={() => setShowAll(prev => !prev)} className={'text-primary'}>
                        {
                            showAll ? 'Скрыть' : '+ Показать всё'
                        }
                    </button>
                )
            }
        </div>
    );
}
