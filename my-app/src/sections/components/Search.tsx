import * as React from 'react';

import TextField from '@mui/material/TextField';

// import './search.css';

const Search = () => {


    return (
        <>
            <div className='search-box'>
                <TextField id="search-input" label="Location" variant="outlined" />
            </div>
        </>
    )
};

export default Search;