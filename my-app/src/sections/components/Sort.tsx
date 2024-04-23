import * as React from 'react';

import './sort.css';

const Sort = () => {


    return (
        <>
            <div className='sort-box'>
                <p>Property Type:</p>
                <div className='sort-options'>
                    <input type='checkbox' id='proptype1' name='proptype1' value="Detached"/>
                    <label htmlFor='proptype1'>Detached</label>
                    <input type='checkbox' id='proptype2' name='proptype2' value="Semi-Detached"/>
                    <label htmlFor='proptype2'>Semi-detached</label>
                    <input type='checkbox' id='proptype3' name='proptype3' value="Terrace"/>
                    <label htmlFor='proptype3'>Terrace</label>
                    <input type='checkbox' id='proptype4' name='proptype4' value="Flat"/>
                    <label htmlFor='proptype4'>Flat</label>
                </div>
            </div>
        </>
    )
};

export default Sort;