import {$api} from "@/shared/api/api";
import {ApiRoutes} from "@/shared/api/apiEndpoints";

export const fetchProductsData = async (query?: string) => {
    try {
        const response = await $api.get(ApiRoutes.SEARCH_PRODUCTS, {
            params: {
                query: query
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}
