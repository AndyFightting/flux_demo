import {Dispatcher} from 'flux'
var GlobalDispatcher = new Dispatcher();
import ViewModal from './ViewModal'

GlobalDispatcher.register(function (dic) {
    switch (dic.type){
        case 'ADD':
            ViewModal.addItem(dic.msg);
            break;
    }
});

module.exports = GlobalDispatcher;