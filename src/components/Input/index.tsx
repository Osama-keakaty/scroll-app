
import useDebounce from '@Hooks/useDebounce';
import { Input } from 'antd';
import { useEffect, useState } from 'react';

type PropsTypes = {
    placeholder?: string;
    value: string;
    setValue: (value: string) => void;
};

const MainInput = ({ value, setValue, placeholder }: PropsTypes) => {
    const [localValue, setLocalValue] = useState(value);
    const debouncedSetValue = useDebounce(setValue, 500);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setLocalValue(newValue);
        debouncedSetValue(newValue);
    };
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    return (
        <Input
            dir="ltr"
            value={localValue}
            onChange={handleChange}
            className="!border !border-primary-light hover:!border-primary-main focus:!border-primary-main h-10 !rounded-2xl !shadow-none"
            placeholder={placeholder || 'Search images...'}
        />
    );
};

export default MainInput;