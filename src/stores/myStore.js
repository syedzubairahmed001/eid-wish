import dispatcher from "../dispatcher";
import EventEmitter from "../../node_modules/eventemitter3"
const CHANGE_EVENT = "change";
let animationIndex = 0;
class myStore extends EventEmitter{
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getIndex() {
        return animationIndex;
}
}

const store = new myStore();
dispatcher.register((action) => {
    switch (action.actionTypes) {
        case 'changeAnimationIndex':
            animationIndex = action.newIndex;
            store.emitChange();
            break;
        default:
    }
});
export default store;