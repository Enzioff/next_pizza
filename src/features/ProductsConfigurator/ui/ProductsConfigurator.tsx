'use client';

import {cn} from "@/shared/lib/utils";
import {ProductImage} from "@/entities/ProductImage";
import {ProductType} from "@/pages/ProductPage";
import {Title} from "@/shared/ui";
import {ProductVariants} from "@/entities/ProductVariants";
import {useState} from "react";

interface ProductsConfiguratorProps {
    className?: string;
    product: ProductType
}

export const ProductsConfigurator = ({product, className}: ProductsConfiguratorProps) => {
    const [size, setSize] = useState<number>(20);
    
    const updateSize = (value: number) => {
        setSize(value);
    }
    
    return (
        <div className={cn('flex flex-1', className)}>
            <ProductImage src={product.imageUrl} alt={product.name} size={size}/>
            <div className={'w-[490px] bg-[#FCFCFC] p-7'}>
                <Title text={product.name} size={"md"} className={'font-extrabold mb-1'}/>
                <p className={'text-gray-400'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam commodi
                    dolores magnam officia quasi, quis. Adipisci at molestiae nostrum quod.
                </p>
                <div className={'flex flex-col'}>
                    <ProductVariants items={product.productVariants} selectedSize={size} onClickEvent={(value: number) => updateSize(value)} />
                </div>
            </div>
        </div>
    );
}
