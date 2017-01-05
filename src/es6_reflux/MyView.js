import React,{ Component } from 'react';
import MyModal from './MyModal'
import MyAction from './MyAction'

//监听方式2使用模块
import Reflux from 'reflux';
import ReactMixin from 'react-mixin'

export default class MyView extends Component{

    //监听方式1.
    componentDidMount() {
        this.unsubscribe = MyModal.listen(this.changed.bind(this));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    changed() {
        this.setState({
            list: MyModal.items,
        });
    }

      constructor(props) {
        super(props);
        this.state = {
            list: [],
        };

        //监听方式2
        // ReactMixin.onClass(MyView, Reflux.listenTo(MyModal, this.changed.bind(this)));
      }

      render(){
          let items;
          if(this.state.list){
              items=this.state.list.map((item,i)=> {
                  return <li key={i}>
                      {item}
                  </li>
              })
          }

          return(
              <div>
                  {items}
                  <button onClick={this.addHello.bind(this)} >addHello - es6 reflux</button>
                  <button onClick={this.addWorld.bind(this)} >addWorld - es6 reflux</button>
              </div>
          );
      }

    addHello(){
        MyAction.addHello('hello  ---------' + this.state.list.length);
    }

    addWorld(){
        MyAction.addWorld('world ---------' + this.state.list.length);
    }
}
