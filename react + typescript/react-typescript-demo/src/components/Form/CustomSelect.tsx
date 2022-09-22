import { useField } from "formik";
import Select, { Options, OnChangeValue } from "react-select";


interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: Options<Option>;
    isMulti?: boolean;
    className?: string;
    placeholder?: string;
    id: string;
	name: string;
}

const CustomSelect = ({
    className,
    placeholder,
    options,
    isMulti = false,
    ...props
}: CustomSelectProps) => {
    const [field, meta, helpers] = useField(props);
    const {setValue} = helpers;
    const onChange = (option: OnChangeValue<Option, boolean>) => {
        setValue(
            isMulti 
                ? (option as Option[]).map((item: Option) => item.value) 
                : (option as Option).value
        );
    }

    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter(option => field.value.indexOf(option.value) >= 0)
                : options.find(option => option.value === field.value)
        } else {
            return isMulti ? [] : ('' as any);
        }
    }

    return (
        <Select
            className={className}
            placeholder={placeholder}
            options={options}
            isMulti={isMulti}
            onChange={onChange}
            value={getValue()}
            isOptionDisabled={() => getValue().length >= 3}
            {...props}            
        />
    )
}

export default CustomSelect;