const GrobalDispatcher = require('./GlobalDispatcher');

const ViewAction = {
    addItem: function (msg) {
        GrobalDispatcher.dispatch({
            type: 'ADD',
            msg: msg,
        });
    },
};
module.exports = ViewAction;