import React from 'react';
import { render } from 'react-dom';

let AAA = React.createClass({
    render(){
        return <div>aklsjdf</div>
    }
})

render((<AAA />), document.getElementById('App'))