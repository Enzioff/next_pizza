import {cn} from "@/shared/lib/utils";
import Link from "next/link";
import {Button, Title} from "@/shared/ui";
import {Plus} from "lucide-react";
import {IProductCard} from "@/entities/ProductCard";

export interface ProductCardProps extends IProductCard {
    className?: string;
}

export const ProductCard = ({id, name, price, imageUrl, className}: ProductCardProps) => {
    return (
        <div className={cn('flex flex-col gap-4', className)}>
            <Link href={`/product/${id}`} scroll={true}>
                <div className={'flex justify-center p-6 bg-secondary rounded-lg h-[260px]'}>
                    <img className={'w-[215px] h-[215px]'} src={imageUrl} alt={name}/>
                </div>
            </Link>
            <div className={'flex flex-col gap-2'}>
                <Title text={name} size={'sm'} className={'font-bold'}/>
                <p className={'text-sm text-gray-400'}>
                    Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
                </p>
                <div className={'flex justify-between items-center gap-2 mt-1'}>
                    <p className={'text-[20px]'}>от <b>{price} ₽</b></p>
                    <Button variant={'secondary'} className={'flex items-center gap-1'}>
                        <Plus size={16}/>
                        <span>Добавить</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
