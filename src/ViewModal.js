import EventEmitter from 'events'
import Assign from 'object-assign'

var ViewModal = Assign({}, EventEmitter.prototype, {
    items: [],

    getAllItem: function () {
        return this.items;
    },

    addItem: function (text) {
        this.items.push(text);
        this.emitChange();
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});
module.exports = ViewModal;