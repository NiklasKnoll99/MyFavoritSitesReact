import React from 'react';
import { Input } from 'chayns-components';

export default class SearchBox extends React.Component { 
    timeout = null;

    render(props) {
        return (
            <div>
                <Input placeholder={this.props.placeholder} onChange={(value) => {this.onChange(value, this.props.onSearch)}}/>
                <label style={{marginLeft: '-25px'}}><i className="fa fa-search"></i></label>
            </div>
        );
    };

    onChange(value, onSearch) {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            onSearch(value);
        }, 500);
    };
}