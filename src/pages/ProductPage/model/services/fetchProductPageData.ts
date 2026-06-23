import {$api} from "@/shared/api/api";
import {ApiRoutes} from "@/shared/api/apiEndpoints";

export async function fetchProductPageData(productId: string) {
    try {
        const response = await $api.get(ApiRoutes.PRODUCTS, {
            params: {
                id: productId,
            }
        })
        
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
