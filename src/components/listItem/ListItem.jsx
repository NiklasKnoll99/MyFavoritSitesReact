import React from 'react';
import ListItemStyle from '../listItem/ListItemStyle.css';

export default class ListItem extends React.Component {
    render() {
        return (
            <div className="item">
                <a href={this.props.url} target="_blank">
                    <div className="itemContent">
                        <div className="itemIcon inlineBlock"></div>
                        <div className="textContent inlineBlock">
                            <h3>{this.props.heading}</h3>
                            <p>{this.props.desc}</p>
                        </div>
                    </div>
                    <div className="line"></div>
                </a>
            </div>
        );
    };
}