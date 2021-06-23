import * as React from 'react';
import { FC, ReactElement, useState } from 'react';
import { useSearch } from '../context/SearchContext';

export const SearchBar : FC = () : ReactElement => {
    const { setUsers } = useSearch();
    const [value, setValue] = useState('');
    const onInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        setUsers(e.target.value)
    };
    const onReset = () => {
        setValue('');
        setUsers('')
    };

    return (
        <>
            <input type="text" onChange={ onInputChange } value={ value }/>
            <button onClick={ onReset }>reset</button>
        </>
    )
};
