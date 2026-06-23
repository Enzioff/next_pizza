import {$api} from "@/shared/api/api";
import {ApiRoutes} from "@/shared/api/apiEndpoints";

export async function fetchIngredientsData() {
    try {
        const response = await $api.get(ApiRoutes.INGREDIENTS)
        
        return response.data
    } catch (error) {
        console.error(error)
        return [];
    }
}
