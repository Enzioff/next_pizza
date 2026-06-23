import {fetchCategoriesData, fetchIngredientsData, HomePage} from "@/pages/HomePage";

export default async function Home() {
    try {
        const ingredients = await fetchIngredientsData();
        const categories = await fetchCategoriesData();
        
        return (
            <HomePage categories={categories} ingredients={ingredients}/>
        )
    } catch (e) {
        console.error(e);
        return <div>Что-то пошло не так</div>
    }
}
