import {cn} from "@/shared/lib/utils";

interface CategoryProps extends React.HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: React.ReactNode;
}

export const Category = ({className, children, ...props}: CategoryProps) => {
    return (
        <div {...props} className={cn('cursor-pointer font-bold py-2.5 px-4 bg-transparent rounded-2xl', className)}>
            {children}
        </div>
    );
}
