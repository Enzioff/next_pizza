import {notFound} from "next/navigation";
import {fetchProductPageData, ProductPage} from "@/pages/ProductPage";

export default async function Product({params}: { params: Promise<{ id: string }> }) {
    const {
        id
    } = await params
    
    const product = await fetchProductPageData(id);
    
    if (!product) {
        return notFound();
    }
    
    return (
        <ProductPage product={product}/>
    )
}
