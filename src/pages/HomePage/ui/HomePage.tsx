import {cn} from "@/shared/lib/utils";
import {Container, Title} from "@/shared/ui";
import {TopBar} from "@/widgets/TopBar";
import {Filters} from "@/widgets/Filters";
import {ProductsGroupList} from "@/features/ProductsGroupList";
import {FilterItem} from "@/entities/FiltersGroup";
import {Prisma} from "@/generated/prisma";

type ProductsType = Prisma.CategoryGetPayload<{
    include: {
        products: {
            include: {
                productVariants: true
            }
        }
    }
}>;


interface HomePageProps {
    className?: string;
    ingredients?: FilterItem[];
    categories?: ProductsType[];
}

const HomePage = ({ingredients, categories, className}: HomePageProps) => {
    return (
        <div className={cn('pt-10', className)}>
            <Container className={'flex flex-col justify-start'}>
                <Title text={'Все пиццы'} size={"lg"} className={'font-extrabold'}/>
            </Container>
            <TopBar categories={categories}/>
            <Container className={'pt-4 pb-14'}>
                <div className={'flex gap-[60px]'}>
                    <div className={'w-[250px]'}>
                        <Filters ingredients={ingredients}/>
                    </div>
                    <div className={'flex-1 flex flex-col gap-12'}>
                        {
                            categories && categories.length > 0 && categories.filter((category) => category.products.length > 0).map(category => (
                                <ProductsGroupList
                                    key={category.id}
                                    title={category.name}
                                    products={category.products}
                                    categoryId={category.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default HomePage;
