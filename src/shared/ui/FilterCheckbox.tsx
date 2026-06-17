import {Checkbox} from "@/shared/ui/checkbox";

interface FilterCheckboxProps {
    text: string;
    value: string;
    name: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
}

export const FilterCheckbox = ({text, checked, onCheckedChange, endAdornment, value, name}: FilterCheckboxProps) => {
    return (
        <div className={'flex items-center'}>
            <label className="flex items-center leading-none cursor-pointer flex-1 gap-3">
                <Checkbox
                    onCheckedChange={onCheckedChange}
                    checked={checked}
                    value={value}
                    name={name}
                    className="rounded-[8px] w-6 h-6"
                />
                {text}
            </label>
            {endAdornment}
        </div>
    );
}
