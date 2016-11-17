import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './homeIndex.scss';
import SearchBar from '../searchBar/searchBar';
import ListItem from './listItem/listItem';

export default class Home extends Component {
    componentDidMount = () => {
        this._setHeight();
    }
    _setHeight = () => {
        let screenH = screen.height; // 转换成rem单位
        let targetH = screenH - 140;
        ReactDom.findDOMNode(this.refs.listWarp).style.height = targetH + 'px';
    }
    render() {
        return (
            <div>
                <SearchBar />
                <div className="homeListWrap" ref="listWarp">
                    <ListItem chartTitle="aaa" />
                </div>
            </div>
        )
    }
}