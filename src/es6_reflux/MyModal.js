import Reflux from 'reflux';
import MyAction from './MyAction'

export default Reflux.createStore({
    items: [],

    listenables: [MyAction],

    onAddHello: function (msg) {
        this.items.push(msg);
        this.trigger(this.items);
    },

    onAddWorld: function (msg) {
        this.items.push(msg);
        this.trigger(this.items);
    },
});

