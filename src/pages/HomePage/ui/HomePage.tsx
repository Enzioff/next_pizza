import {cn} from "@/shared/lib/utils";
import {Container, Title} from "@/shared/ui";
import {TopBar} from "@/widgets/TopBar";
import {Filters} from "@/entities/Filters";

interface HomePageProps {
    className?: string;
}

export function HomePage({className}: HomePageProps) {
    return (
        <div className={cn('pt-10', className)}>
            <Container className={'flex flex-col justify-start'}>
                <Title text={'Все пиццы'} size={"lg"} className={'font-extrabold'}/>
            </Container>
            <TopBar/>
            <Container className={'pt-4 pb-14'}>
                <div className={'flex gap-[60px]'}>
                    <div className={'w-[250px]'}>
                        <Filters/>
                    </div>
                    <div className={'flex-1 flex flex-col gap-12'}>
                        <div className={'grid grid-cols-3 gap-12'}>
                            <div>Список товаров</div>
                            <div>Список товаров</div>
                            <div>Список товаров</div>
                            <div>Список товаров</div>
                        </div>
                        <div className={'grid grid-cols-3 gap-12'}>
                            <div>Список товаров</div>
                            <div>Список товаров</div>
                            <div>Список товаров</div>
                            <div>Список товаров</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
