import pingvin from "../Sprites/Dialogs/Пингвинёнок.jpg";
import jiraf from "../Sprites/Dialogs/Жираф.jpg";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";



let store = {
    _state: {
        profilePage:
            {
                postData:
                    [
                        {id: 1, title: "My first Post", text: "Hey, it's my first post!", likeCount: 12},
                        {id: 2, title: "My second Post", text: "Awesome, it's my second post!", likeCount: 7}
                    ],
                newPost:
                    {
                        newPostTitle: '',
                        newPostText: ''
                    }
            },
        friends:
            [
                {ava: pingvin, id: "1", who: "With myself", message: "Hi!It's me!"},
                {ava: jiraf, id: "2", who: "Friend", message: "Hi!What's up?"}
            ],
        currentDialogId: 0


// { ava: this.friends[1].ava,id:this.friends[1].id,who:this.friends[1].who, message: this.friends[1].messages[-1].message}

    },
    _callSubscriber(state) {

    },
    getState() {
        return this._state;
    },
    subcribe(observer) {
        this._callSubscriber = observer; // pattern observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.currentDialogId = dialogsReducer(this._state.currentDialogId,action);
        this._callSubscriber(this._state);

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         title: this._state.profilePage.newPost.newPostTitle,
        //         text: this._state.profilePage.newPost.newPostText,
        //         likeCount: 10
        //     };
        //     this._state.profilePage.postData.push(newPost);
        //     this._state.profilePage.newPost.newPostTitle = '';
        //     this._state.profilePage.newPost.newPostText = '';
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === updateTitleNewPost) {
        //     this._state.profilePage.newPost.newPostTitle = action.postTitle;
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === updateTextNewPost) {
        //     this._state.profilePage.newPost.newPostText = action.postText;
        //     this._callSubscriber(this._state);
        // }
        // else if (action.type === OPEN_DIALOG){
        //     this._state.currentDialogId = action.id;
        //     this._callSubscriber(this._state);
        // }

    }
}


// export default store;


window.store = store;
