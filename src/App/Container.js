import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link, IndexLink } from 'react-router'
import './Container.scss';


export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': 'aaa',
        }
    }
    changeTitle = (e) => {
        this.setState({
            title: e.target.getAttribute('data-title')
        })
    }
    render() {
        return (
            <div id="container">
                <div className="titleBar">
                    {this.state.title}
                </div>
                {this.props.children}
                <div className="tabBar">
                    <div className="tabItemWrap">
                        <IndexLink to="/home" data-title="aaa" onClick={this.changeTitle} activeClassName="active" className="iconfont icon-params format"></IndexLink>
                    </div>
                    <div className="tabItemWrap">
                        <Link to="/collect" data-title="bbb" onClick={this.changeTitle} activeClassName="active" className="iconfont icon-star format"></Link>
                    </div>
                    <div className="tabItemWrap">
                        <Link to="/user" data-title="ccc" onClick={this.changeTitle} activeClassName="active" className="iconfont icon-user format"></Link>
                    </div>
                </div>
            </div>

        )
    }
}