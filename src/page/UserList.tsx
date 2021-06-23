import * as React from 'react';
import { FC, ReactElement } from 'react';
import { UserCard } from '../component/UserCard';
import { useFavs } from '../context/favContext';
import { useSearch } from '../context/SearchContext';

export const UserList : FC = () : ReactElement => {
    const { results } = useSearch();
    const { favs } = useFavs();
    const sortedUsers = favs ? results.sort((a, b) => {

        const orderA = favs.has(a) ? 1 : 0;
        const orderB = favs.has(b) ? 1 : 0;
        if (orderA > orderB) {
            return -1;
        } else {
            return +1;
        }
    }) : results;
    return (
        <div style={ { display : 'flex', flexWrap : 'wrap' } }>
            { sortedUsers.map(user => <UserCard key={ user.id } user={ user }/>) }
        </div>
    )
};
