import React, { createContext, FC, useContext, useState } from 'react';
import { users as baseUsers } from '../dummy';
import { IUser } from '../interface/IUser';
import { Identified } from '../type/Identified';

export type SearchContextType = {
    results : Identified<IUser>[];
    setUsers : (query : string) => any;
    resetUsers : () => any;
}

export const SearchContext = createContext<SearchContextType>({ results : baseUsers, setUsers : () => {}, resetUsers : () => {} });
export const useSearch = () => useContext(SearchContext);
export const SearchProvider : FC = ({ children }) => {
    const [results, setResults] = useState(baseUsers);

    const setUsers = (query : string) => setResults(
        (users) => query ? users.filter(user => user.username.toLowerCase().search(query.toLowerCase()) !== -1) : baseUsers);
    const resetUsers = () => setResults(baseUsers);
    return (
        <SearchContext.Provider
            value={ {
                results,
                setUsers,
                resetUsers
            } }
        >
            { children }
        </SearchContext.Provider>
    );
};

