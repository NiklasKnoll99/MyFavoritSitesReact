import React from 'react';

const SearchBox = (args) => {
    return (
        <div>
            <input className="input" placeholder={args.placeholder}/>
            <label style={{marginLeft: '-25px'}}><i className="fa fa-search"></i></label>
        </div>
    );
};

export default SearchBox;