import Reflux from 'reflux';
import RefluxAction from './RefluxAction'

var RefluxModal = Reflux.createStore({
    items: [],

    listenables: [RefluxAction],

    onAddHello: function (msg) {
            this.items.push(msg);
            this.trigger(this.items);
    },

    onAddWorld: function (msg) {
        this.items.push(msg);
        this.trigger(this.items);
    },
});

module.exports = RefluxModal;