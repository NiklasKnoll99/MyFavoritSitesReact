import React from 'react';
import SearchBox from '../searchBox/SearchBox';
import ListItem from '../listItem/ListItem';
import LoadMoreLink from '../loadMoreLink/LoadMoreLink';
import fetch from '../utils/fetch.js';
import '../style/Style.css';
import '../display/DisplayStyle.css';

export default class Display extends React.Component {
    constructor() {
        super();
        this.state = {
            jsonData: [],
            skip: 0,
            take: 10,
            searchStr: ''
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
                    {this.state.jsonData.map(s =>
                        <ListItem
                            key={s.siteId}
                            appstoreName={s.appstoreName}
                            siteId={s.siteId}
                            locationId={s.locationId}
                            facebookId={s.facebookId}
                        />
                    )}
                    </div>

                    <div className="loadMore"><LoadMoreLink onClick={() => this.onLoadMore()} text="Mehr anzeigen"/></div>
                </div>
            </div>
        );
    };

    onJsonLoad(jsonObjects, searchStr, append) {
        this.setState({
            jsonData: append ? this.state.jsonData.concat(jsonObjects) : jsonObjects,
            searchStr,
            skip: append ? this.state.skip + jsonObjects.length : jsonObjects.length
        });
    };

    onSearch(searchStr) {
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + searchStr + '&Skip=' + this.state.skip + '&Take=' + this.state.take, 
        (json) => this.onJsonLoad(json, searchStr, false));
    };

    onLoadMore() {
        console.log('load more');
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=' + this.state.searchStr + '&Skip=' + this.state.skip + '&Take=' + this.state.take,
        (json) => this.onJsonLoad(json, this.state.searchStr, true));
    };
}