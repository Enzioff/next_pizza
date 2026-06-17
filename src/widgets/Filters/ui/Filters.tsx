import {cn} from "@/shared/lib/utils";
import {FilterCheckbox, Input, Slider, Title} from "@/shared/ui";
import {FiltersGroup} from "@/entities/FiltersGroup";

interface FiltersProps {
    className?: string;
}

export const Filters = ({className}: FiltersProps) => {
    return (
        <div className={cn('flex flex-col gap-5', className)}>
            <Title text="Фильтрация" size={'sm'} className={'font-bold'}/>
            <div className={'flex flex-col gap-6'}>
                <div className={'flex flex-col gap-4'}>
                    <FilterCheckbox text={'Можно собирать'} name={'type'} value={'1'}/>
                    <FilterCheckbox text={'Новинки'} name={'type'} value={'2'}/>
                </div>
                <div className={'flex flex-col gap-4 py-6 border-y border-y-neutral-100'}>
                    <p className={'font-bold'}>Цена от и до:</p>
                    <div className={'flex gap-3'}>
                        <Input
                            type={"number"}
                            min={0}
                            max={1000}
                            defaultValue={0}
                            name={'priceValue'}
                            placeholder={'0'}
                        />
                        <Input
                            type={"number"}
                            min={100}
                            max={1000}
                            name={'priceValue'}
                            placeholder={'1000'}
                        />
                    </div>
                    <Slider
                        min={0}
                        max={1000}
                        step={10}
                        defaultValue={[0, 1000]}
                    />
                </div>
                <FiltersGroup
                    title={'Ингредиенты:'}
                    defaultItems={[
                        {text: 'Сырный соус', value: '1', name: 'parts'},
                        {text: 'Моцарелла', value: '2', name: 'parts'},
                        {text: 'Чеснок', value: '3', name: 'parts'},
                        {text: 'Солённые огурчики', value: '4', name: 'parts'},
                        {text: 'Красный лук', value: '5', name: 'parts'},
                        {text: 'Томаты', value: '6', name: 'parts'},
                    ]}
                    items={[
                        {text: 'Сырный соус', value: '1', name: 'parts'},
                        {text: 'Моцарелла', value: '2', name: 'parts'},
                        {text: 'Чеснок', value: '3', name: 'parts'},
                        {text: 'Солённые огурчики', value: '4', name: 'parts'},
                        {text: 'Красный лук', value: '5', name: 'parts'},
                        {text: 'Томаты', value: '6', name: 'parts'},
                        {text: 'Сырный соус1', value: '1', name: 'parts'},
                        {text: 'Моцарелла2', value: '2', name: 'parts'},
                        {text: 'Чеснок3', value: '3', name: 'parts'},
                        {text: 'Солённые огурчики4', value: '4', name: 'parts'},
                        {text: 'Красный лук5', value: '5', name: 'parts'},
                        {text: 'Томаты1', value: '6', name: 'parts'},
                        {text: 'Сырный соус2', value: '1', name: 'parts'},
                        {text: 'Моцарелла3', value: '2', name: 'parts'},
                        {text: 'Чеснок4', value: '3', name: 'parts'},
                        {text: 'Солённые огурчики5', value: '4', name: 'parts'},
                        {text: 'Красный лук6', value: '5', name: 'parts'},
                        {text: 'Томаты7', value: '6', name: 'parts'},
                    ]}
                />
            </div>
        </div>
    );
}
