import * as React from 'react';
import { FC, ReactElement } from 'react';
import { UserCard } from '../component/UserCard';
import { useFavs } from '../context/favContext';
import { HOCSearchable } from '../hoc/HOCSearchable';
import { IUser } from '../interface/IUser';
import { Identified } from '../type/Identified';

export interface IUserListProps {
    data : Identified<IUser>[];
}

export const UserList : FC<IUserListProps> = (props) : ReactElement => {
    const { data } = props;
    const { favs } = useFavs();
    const sortedUsers = favs ? data.sort((a, b) => {

        const orderA = favs.has(a) ? 1 : 0;
        const orderB = favs.has(b) ? 1 : 0;
        if (orderA > orderB) {
            return -1;
        } else {
            return +1;
        }
    }) : data;
    return (
        <div style={ { display : 'flex', flexWrap : 'wrap' } }>
            { sortedUsers.map(user => <UserCard key={ user.id } user={ user }/>) }
        </div>
    )
};

export const SearchUser = HOCSearchable(UserList);
