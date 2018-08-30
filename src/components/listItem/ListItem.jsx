import React from 'react';
import '../listItem/ListItemStyle.css';

const ListItem = (args) => {
    return (
        <div className="item">
            <a href={args.url} target="_blank">
                <div className="itemContent">
                    <div className="itemIcon inlineBlock" style={{width: '45px', height: '45px', backgroundSize: 'cover', backgroundImage: 'url(' + args.iconUrl + ')'}}></div>
                    <div className="textContent inlineBlock">
                        <h3 className="heading">{args.headline}</h3>
                        <p className="description">{args.desc}</p>
                    </div>
                </div>
                <div className="line"></div>
            </a>
        </div>
    );
};

export default ListItem;