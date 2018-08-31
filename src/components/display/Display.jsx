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
    
    constructor() {
        super();
        this.state = {
            jsonData: [],
        }
    }

    render() {
        return (
            <div className="accordion accordion--open accordion--fixed">
                <div className="accordion__head">
                    Suchen
                    <div className="searchHead right"><SearchBox onSearch={(searchStr) => this.onSearch(searchStr)} placeholder="Suche"/></div>
                </div>
                <div className="accordion__body clearBoth">
                    <div className="siteDisplay">
                    {this.createListItems()}
                    </div>

                    <div className="loadMore"><LoadMoreLink onClick={() => this.onLoadMore()} text="Mehr anzeigen"/></div>
                </div>
            </div>
        );
    };

    createListItems() {
        if (this.state.jsonData != []) {
            return this.state.jsonData.map(s =>
                <ListItem
                    key={s.siteId}
                    appstoreName={s.appstoreName}
                    siteId={s.siteId}
                    locationId={s.locationId}
                    facebookId={s.facebookId}
                />
            )
        }
    };

    onEmptySearch() {
        this.setState({
            jsonData: [],
        });
    };

    onJsonLoad(jsonObjects, searchStr, append) {
        this.setState({
            jsonData: append ? this.state.jsonData.concat(jsonObjects) : jsonObjects,
        });
    };

    onSearch(searchStr) {
        if (searchStr.length > 0) {
            this.searchStr = searchStr;
            fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + this.searchStr + '&Skip=' + this.skip + '&Take=' + this.take, 
            (json) => this.onJsonLoad(json, searchStr, false));
        }

        else
            this.onEmptySearch();
    };

    onLoadMore() {
        if (this.searchStr.length > 0) {
            this.skip += 10;
            fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + this.searchStr + '&Skip=' + this.skip + '&Take=' + this.take,
            (json) => this.onJsonLoad(json, this.searchStr, true));
        }

        else
            this.onEmptySearch();
    };
}