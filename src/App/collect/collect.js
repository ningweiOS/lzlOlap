import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './collect.scss';
import SearchBar from '../searchBar/searchBar';

export default class Collect extends Component {
    componentDidMount = () => {
        this._setHeight();
    }
    _setHeight = () => {
        let dpr = Math.ceil(devicePixelRatio.toFixed(1));
        let screenH = screen.height * dpr / 100; // 转换成rem单位
        let targetH = screenH - 2.2;
        ReactDom.findDOMNode(this.refs.listWarp).style.height = targetH + 'rem';
    }
    render() {
        return (
            <div>
                <SearchBar />
                <div className="collectListWarp" ref="listWarp">
                    <ul className="chartList">
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                        <li>列表1</li>
                        <li>列表2</li>
                        <li>列表3</li>
                    </ul>
                </div>
            </div>
        )
    }
}