import {Categories} from "@/entities/Categories";
import {Container, SortPopup} from "@/shared/ui";
import {Category} from "@/generated/prisma";

interface TopBarProps {
    categories?: Category[];
}

export const TopBar = ({categories}: TopBarProps) => {
    return (
        <div className={'sticky top-0 bg-white shadow-lg shadow-black/5 z-10 py-5'}>
            <Container className={'flex items-center justify-between'}>
                <Categories categories={categories}/>
                <SortPopup/>
            </Container>
        </div>
    );
}
