import * as React from 'react';
import { FC, useState } from 'react';
import { SearchBar } from '../component/SearchBar';

export interface IObject<T = any> {
    [key : string] : T;
}

export interface ISearchableProps {
    data : IObject[];
    property : string;
}

export interface ISearchable {
    query? : string;
}

export const HOCSearchable = <P extends {}>(Component : FC<P & ISearchable>) => {
    const Render : FC<P & ISearchableProps> = (props) => {
        const [data, setData] = useState(props.data);
        const [query, setQuery] = useState('');

        const onSearchChange = (e : React.ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
            setData(
                (data) => e.target.value ? data.filter(object => object[props.property].toLowerCase().search(e.target.value.toLowerCase()) !== -1) : props.data);
        }
        const onReset = () => {
            setQuery('');
            setData(props.data);
        }
        return (
            <section>
                <SearchBar value={ query } onChange={ onSearchChange } onReset={ onReset }/>
                <Component { ...props } data={ data }/>
            </section>
        );
    };
    return Render
};