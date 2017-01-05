import React,{ Component } from 'react';
import Reflux from 'reflux';
import RefluxModal from './RefluxModal'
import RefluxAction from './RefluxAction'

var RefluxView = React.createClass({
     // 方式1.
    // mixins: [Reflux.connect(RefluxModal,'list')], //用这个就可以不要changed方法了，数据自动绑定到list

    // 方式2.
    // mixins: [Reflux.listenTo(RefluxModal, 'changed')],

    // 方式3.
    // mixins: [Reflux.ListenerMixin],
    // componentDidMount: function() {
    //     this.listenTo(RefluxModal, this.changed);
    // },

    // 方式4.
    componentDidMount: function () {
        this.unsubscribe = RefluxModal.listen(this.changed);
    },
    componentWillUnmount: function () {
        this.unsubscribe();
    },

    changed: function () {
        this.setState({
            list: RefluxModal.items,
        });
    },

    getInitialState: function () {
        return {
            list: [],
        };
    },

    render: function () {
        let items;
        if(this.state.list){
            items=this.state.list.map((item,i)=> {
                return <li key={i}>
                    {item}
                </li>
            })
        }

        return (
            <div>
                {items}
                <button onClick={this.addHello} >addHello es5 reflux</button>
                <button onClick={this.addWorld} >addWorld es5 reflux</button>
            </div>
        )
    },

    addHello: function(){
        RefluxAction.addHello('hello  ---------' + this.state.list.length);
    },

    addWorld: function(){
        RefluxAction.addWorld('world ---------' + this.state.list.length);
    }

});

module.exports = RefluxView;