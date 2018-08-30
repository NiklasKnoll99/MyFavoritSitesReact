import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ListItem from '../listItem/ListItem';
import fetch from '../utils/fetch.js';
import '../style/Style.css';
import '../display/DisplayStyle.css';

export default class Display extends React.Component {
    render() {
        return (
            <div className="accordion accordion--open accordion--fixed">
                <div className="accordion__head">
                    Suchen
                    <div className="searchHead right"><SearchBox onSearch={this.onSearch} placeholder="Suche"/></div>
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

    onSearch(searchStr) {
        console.log(searchStr);
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=10', onJsonLoad);
    };
}

let onJsonLoad = (jsonObjects) => {
    for (let i = 0; i < jsonObjects.length; i++) {
        console.log(jsonObjects[i]);
    }
};