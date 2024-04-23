import * as React from 'react';
import Search from './components/Search';
// import Sort from './components/Sort';

import './searchBar.css';
import MultipleSelectCheckmarks from './components/Sort';

const SearchBar = () => {


    return (
        <>
            <nav className='search-section'>
                <Search/>
                <MultipleSelectCheckmarks/>
                <button>Search</button>
            </nav>
        </>
    )
};

export default SearchBar;

