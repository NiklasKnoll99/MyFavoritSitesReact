import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ListItem from '../listItem/ListItem';
import '../style/Style.css';
import '../display/DisplayStyle.css';

export default class Display extends React.Component {
    render() {
        return (
            <div className="accordion accordion--open accordion--fixed">
                <div className="accordion__head">
                    Suchen
                    <div className="searchHead right"><SearchBox placeholder="Suche"/></div>
                </div>
                <div className="accordion__body clearBoth">
                    <div className="siteDisplay">
                        <ListItem headline="Hi" desc="Test"/>
                        <ListItem headline="Hi" desc="Test"/>
                        <ListItem headline="Hi" desc="Test"/>
                        <ListItem headline="Hi" desc="Test"/>
                        <ListItem headline="Hi" desc="Test"/>
                    </div>

                    <div className="loadMore"><a href="#">Mehr anzeigen</a></div>
                </div>
            </div>
        );
    };
}