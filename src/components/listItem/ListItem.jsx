import React from 'react';
import '../listItem/ListItemStyle.css';

const ListItem = (args) => {
    return (
        <div className="item">
            <a href={`https://chayns.net/${args.siteId}`} target="_blank">
                <div className="itemContent">
                    <div className="itemIcon inlineBlock" style={{backgroundSize: 'cover', backgroundImage: 'url(https://sub60.tobit.com/l/' + args.locationId + ')'}}></div>
                    <div className="textContent inlineBlock">
                        <h4 className="heading">{args.appstoreName}</h4>
                        <p className="description">{args.siteId}</p>
                    </div>
                </div>
                <div className="line"></div>
            </a>
        </div>
    );
};

export default ListItem;