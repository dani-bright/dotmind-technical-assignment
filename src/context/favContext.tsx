import React, { createContext, FC, useContext, useState } from 'react';
import { IUser } from '../interface/IUser';
import { Identified } from '../type/Identified';

export type FavContextType = {
    favs : Set<Identified<IUser>>;
    addFavs : (fav : Identified<IUser>) => void;
}

export const FavContext = createContext<FavContextType>({ favs : new Set<Identified<IUser>>(), addFavs : () => {} });
export const useFavs = () => useContext(FavContext);
export const FavProvider : FC = ({ children }) => {
    const [favs, setFavs] = useState(new Set<Identified<IUser>>());

    // @ts-ignore
    const addFavs = (newFav : Identified<IUser>) => setFavs((favs) => {
        if (!favs.has(newFav)) {
            setFavs(previousState => new Set([...(favs as any), newFav]))
        } else {
            const arr = [...(favs as any)].filter(x => x !== newFav)
            setFavs(new Set(arr))
        }
    });
    return (
        <FavContext.Provider
            value={ {
                favs,
                addFavs
            } }
        >
            { children }
        </FavContext.Provider>
    );
};
