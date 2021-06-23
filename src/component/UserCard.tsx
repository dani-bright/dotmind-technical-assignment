import * as React from 'react';
import { FC, memo } from 'react';
import { useFavs } from '../context/favContext';
import { IUser } from '../interface/IUser';
import { Identified } from '../type/Identified';

export type UserCardProps = {
    user : Identified<IUser>;
}
export const UserCard : FC<UserCardProps> = memo(props => {
    const { user } = props;
    const { favs, addFavs } = useFavs();

    const onCardClick = () => {
        addFavs(user);
    }
    return (
        <div style={ { margin : '5px', border : favs.has(user) ? '4px solid pink' : 'none' } } onClick={ onCardClick }>
            <img src={ user.picture } alt={ `user${ user.id }` }/>
            <p>{ user.username }</p>
        </div>
    )
});
