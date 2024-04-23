import * as React from 'react';
import Search from './components/Search';
import Sort from './components/Sort';

import './searchBar.css';

const SearchBar = () => {


    return (
        <>
            <nav className='search-section'>
                <Search/>
                <Sort/>
                <button>Search</button>
            </nav>
        </>
    )
};

export default SearchBar;

