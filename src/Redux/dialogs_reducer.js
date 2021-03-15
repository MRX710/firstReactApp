import pingvin from "../Sprites/Dialogs/Пингвинёнок.jpg";
import jiraf from "../Sprites/Dialogs/Жираф.jpg";

const OPEN_DIALOG = 'OPEN_DIALOG';

let initial_state = {
    friends:
        [
            {ava: pingvin, id: "1", who: "With myself", message: "Hi!It's me!"},
            {ava: jiraf, id: "2", who: "Friend", message: "Hi!What's up?"}
        ],
    currentDialog: {}
}

const dialogsReducer = (state = initial_state, action) => {
    switch (action.type){
        case OPEN_DIALOG:
            state.currentDialog = action.dialog;
            return state;
        default: return state;
    }

}
export default dialogsReducer;
export const openDialogCreator = (obj) => ({type: OPEN_DIALOG, dialog: {ava: obj.ava, id: obj.id, who: obj.who, message: obj.message}})