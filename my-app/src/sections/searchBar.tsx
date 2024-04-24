import * as React from 'react';
// import Search from './components/Search';
import TextField from '@mui/material/TextField';

import './searchBar.css';
import MultipleSelectCheckmarks from './components/Sort';
import { Button } from '@mui/material';

const SearchBar = () => {


    return (
        <>
            <nav className='search-section'>
                {/* <Search/> */}
                <TextField id="search-input" label="Location" variant="outlined" />
                <MultipleSelectCheckmarks/>
                <Button variant='contained' size='medium'>Search</Button>
            </nav>
        </>
    )
};

export default SearchBar;

