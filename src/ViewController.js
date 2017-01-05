import React,{ Component } from 'react';
import View from './View'
import ViewModal from './ViewModal'
import ViewAction from './ViewAction'

export default class ViewController extends Component {

      constructor(props) {
        super(props);
        this.state = {
            items:  ViewModal.getAllItem(),
        };
      }

    componentDidMount() {
        ViewModal.addChangeListener(this.changeListener.bind(this));
    }

    componentWillUnMount() {
        ViewModal.removeChangeListener(this.changeListener)
    }

    changeListener(){
        this.setState({
            items:  ViewModal.getAllItem(),
        });
    }

    addTaped() {
        ViewAction.addItem('hello world ----- '+this.state.items.length);
    }

  render() {
    return (
        <View addTaped = {this.addTaped.bind(this)} items = {this.state.items} />
    );
  }
}
