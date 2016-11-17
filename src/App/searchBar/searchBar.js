import React, { Component } from 'react';
import './searchBar.scss';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar">
                <input type="text" name="search" defaultValue="" placeholder="请输入搜索内容" />
            </div>
        )
    }
}