import React from 'react';
import './App.css';
import { FavProvider } from './context/favContext';
import { users } from './dummy';
import { SearchUser } from './page/UserList';

function App() {
    return (
        <FavProvider>
            <div className="App">
                <SearchUser data={ users } property="username"/>
            </div>
        </FavProvider>
    );
}

export default App;
