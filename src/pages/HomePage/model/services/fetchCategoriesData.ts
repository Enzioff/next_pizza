import {$api} from "@/shared/api/api";
import {ApiRoutes} from "@/shared/api/apiEndpoints";

export async function fetchCategoriesData() {
    try {
        const response = await $api.get(ApiRoutes.CATEGORIES)
        return response.data
    } catch (error) {
        console.error(error);
        return [];
    }
}
