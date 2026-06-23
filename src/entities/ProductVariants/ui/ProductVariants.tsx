'use client';

import {cn} from "@/shared/lib/utils";
import {ProductVariant} from "@/generated/prisma";

interface Variant extends ProductVariant {
    disabled?: boolean;
}

interface ProductVariantsProps {
    items: readonly Variant[];
    defaultValue?: string;
    onClickEvent: (value: Variant['size']) => void;
    selectedSize?: Variant['size'];
    className?: string;
}

export const ProductVariants = ({items, selectedSize, defaultValue, onClickEvent, className}: ProductVariantsProps) => {
    return (
        <div className={cn('flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none', className)}>
            {
                items && items.length > 0 && items.map(item => (
                    <button
                        key={item.name}
                        className={cn('flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm', {
                            'bg-white shadow': item.size === selectedSize,
                            'text-gray-500 opacity-50 pointer-events-none': item.disabled,
                        })}
                        onClick={() => onClickEvent(item.size)}
                    >
                        {item.name}
                    </button>
                ))
            }
        </div>
    );
}
