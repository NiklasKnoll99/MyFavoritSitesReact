import React from 'react';
import ListItemStyle from '../listItem/ListItemStyle.css';

const ListItem = (args) => {
    return (
        <div className="item">
            <a href={args.url} target="_blank">
                <div className="itemContent">
                    <div className="itemIcon inlineBlock"></div>
                    <div className="textContent inlineBlock">
                        <h3>{args.heading}</h3>
                        <p>{args.desc}</p>
                    </div>
                </div>
                <div className="line"></div>
            </a>
        </div>
    );
};

export default ListItem;