
import dispatcher from "../dispatcher";

export function changeIndex(index) {
    dispatcher.dispatch({
        actionTypes: 'changeAnimationIndex',
        newIndex:index ,
    });
}