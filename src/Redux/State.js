import pingvin from "../Sprites/Dialogs/Пингвинёнок.jpg";
import jiraf from "../Sprites/Dialogs/Жираф.jpg";

// function lastMessage() {
//     for (let i=0; i<this.friends.length;i++){
//         this.dialogsData[i].lastMessage = this.friends[i].messages[-1].message;
//     };
// };

const  ADD_POST = 'ADD-POST';
const updateTitleNewPost = 'updateTitleNewPost';
const updateTextNewPost = 'updateTextNewPost';

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
            ]

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                title: this._state.profilePage.newPost.newPostTitle,
                text: this._state.profilePage.newPost.newPostText,
                likeCount: 10
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPost.newPostTitle = '';
            this._state.profilePage.newPost.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === updateTitleNewPost) {
            this._state.profilePage.newPost.newPostTitle = action.postTitle;
            this._callSubscriber(this._state);
        }
        else if (action.type === updateTextNewPost) {
            this._state.profilePage.newPost.newPostText = action.postText;
            this._callSubscriber(this._state);
        }

    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateTitleNewPostActionCreator = (title) => ({type: updateTitleNewPost, postTitle: title})
export const updateTextNewPostActionCreator = (text) => ({type: updateTextNewPost, postText: text})

export default store;


window.store = store;
