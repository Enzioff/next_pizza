import {cn} from "@/shared/lib/utils";

interface CategoryProps extends React.HTMLAttributes<HTMLDivElement>{
    name: string;
    className?: string;
    children?: React.ReactNode;
}

export const Category = ({className, name, children, ...props}: CategoryProps) => {
    return (
        <a href={`/#${name}`} {...props} className={cn('cursor-pointer font-bold py-2.5 px-4 bg-transparent rounded-2xl scroll-pt-10', className)}>
            {children}
        </a>
    );
}
