import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ListItem from '../listItem/ListItem';
import LoadMoreLink from '../loadMoreLink/LoadMoreLink';
import fetch from '../utils/fetch.js';
import '../style/Style.css';
import '../display/DisplayStyle.css';

export default class Display extends React.Component {
    skip = 0;
    take = 10;
    searchStr = '';

    render() {
        return (
            <div className="accordion accordion--open accordion--fixed">
                <div className="accordion__head">
                    Suchen
                    <div className="searchHead right"><SearchBox onSearch={(searchStr) => this.onSearch(searchStr)} placeholder="Suche"/></div>
                </div>
                <div className="accordion__body clearBoth">
                    <div className="siteDisplay">
                    </div>

                    <div className="loadMore"><LoadMoreLink onClick={() => this.onLoadMore()} text="Mehr anzeigen"/></div>
                </div>
            </div>
        );
    };

    onJsonLoad(jsonObjects) {
        for (let i = 0; i < jsonObjects.length; i++) {
            console.log(jsonObjects[i]);
        }
    };

    onSearch(searchStr) {
        this.searchStr = searchStr;
        console.log(this.searchStr);
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + this.searchStr + '&Skip=' + this.skip + '&Take=' + this.take, (json) => this.onJsonLoad(json));
    };

    onLoadMore() {
        console.log('load more');
        this.skip += this.take;
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + this.searchStr + '&Skip=' + this.skip + '&Take=' + this.take, (json) => this.onJsonLoad(json));
    };
}