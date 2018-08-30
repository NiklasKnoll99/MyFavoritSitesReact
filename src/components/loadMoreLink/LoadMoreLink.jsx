import React from 'react';

const LoadMoreLink = (args) => {
    return (
        <a onClick={args.onClick} href="#">{args.text}</a>
    );
};

export default LoadMoreLink;