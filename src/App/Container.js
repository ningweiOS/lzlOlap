import React, {Component} from 'react';
import { Link, IndexLink } from 'react-router'
import './Container.scss';

export default class Container extends Component {
    render() {
        return(
            <div id="container">
                <div className="titleBar">
                    测试标题
                </div>
                {this.props.children}
                <div className="tabBar">
                    <div className="tabItemWrap">
                        <IndexLink to="/home">aaa</IndexLink>
                    </div>
                    <div className="tabItemWrap">
                        <Link to="/collect">bbb</Link>
                    </div>
                    <div className="tabItemWrap">
                        <Link to="/user">ccc</Link>
                    </div>
                </div>
            </div>
            
        )
    }
}