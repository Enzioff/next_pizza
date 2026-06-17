import {cn} from "@/shared/lib/utils";
import {Container, Title} from "@/shared/ui";
import {TopBar} from "@/widgets/TopBar";
import {Filters} from "@/widgets/Filters";
import {ProductsGroupList} from "@/features/ProductsGroupList";

interface HomePageProps {
    className?: string;
}

const HomePage = ({className}: HomePageProps) => {
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
                        <ProductsGroupList
                            title={'Пиццы'}
                            categoryId={0}
                            products={[
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                }
                            ]}
                        />
                        <ProductsGroupList
                            title={'Завтраки'}
                            categoryId={1}
                            products={[
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                },
                                {
                                    id: '0',
                                    name: 'Диабло',
                                    price: 499,
                                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0198bf439a007604880d0231be87cd3e.webp'
                                }
                            ]}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HomePage;
