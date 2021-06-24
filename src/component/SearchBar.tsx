import * as React from 'react';
import { FC, ReactElement } from 'react';

export interface ISearchBarProps {
    onChange? : (e : React.ChangeEvent<HTMLInputElement>) => void;
    onReset? : () => void;
    value? : string;
}

export const SearchBar : FC<ISearchBarProps> = (props) : ReactElement => {
    return (
        <>
            <input { ...props } type="text"/>
            <button onClick={ props.onReset }>reset</button>
        </>
    )
};
