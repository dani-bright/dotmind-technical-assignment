import React from 'react';
import './App.css';
import { SearchBar } from './component/SearchBar';
import { FavProvider } from './context/favContext';
import { SearchProvider } from './context/SearchContext';
import { UserList } from './page/UserList';

function App() {
    return (
        <SearchProvider>
            <FavProvider>
                <div className="App">
                    <SearchBar/>
                    <UserList/>
                </div>
            </FavProvider>
        </SearchProvider>
    );
}

export default App;
