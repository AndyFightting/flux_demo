import React,{ Component } from 'react';
export default class View extends Component{
    render(){
        var items = this.props.items;
        var itemList = items.map(function (listItem, i) {
            return <li key={i}>{listItem}</li>;
        });

        return(
            <div>
                <ul>{itemList}</ul>
                <button onClick={this.props.addTaped}>  点击  </button>
            </div>
        );
    }
}

