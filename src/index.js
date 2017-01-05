import React from 'react';
import ReactDOM from 'react-dom';
import ViewController from './ViewController'; //flux demo
import RefluxView from './reflux/RefluxView';  //reflux demo
import MyView from './es6_reflux/MyView';      //es6 reflux demo

ReactDOM.render(
  <MyView />,
  document.getElementById('root')
);