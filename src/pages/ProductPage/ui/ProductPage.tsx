import {cn} from "@/shared/lib/utils";
import {Container} from "@/shared/ui";
import {ProductType} from "@/pages/ProductPage";
import {ProductsConfigurator} from "@/features/ProductsConfigurator";

interface ProductPageProps {
    className?: string;
    product: ProductType;
}

export const ProductPage = ({product, className}: ProductPageProps) => {
    return (
        <div className={'pt-10'}>
            <Container className={cn('flex flex-col')}>
                <ProductsConfigurator product={product} className={''} />
            </Container>
        </div>
    );
}
