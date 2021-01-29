import pingvin from "../Sprites/Dialogs/Пингвинёнок.jpg";
import jiraf from "../Sprites/Dialogs/Жираф.jpg";

// function lastMessage() {
//     for (let i=0; i<this.friends.length;i++){
//         this.dialogsData[i].lastMessage = this.friends[i].messages[-1].message;
//     };
// };

let state = {
    postData: [
        {id: 1, title: "My first Post", text: "Hey, it's my first post!", likeCount: 12},
        {id: 2, title: "My second Post", text: "Awesome, it's my second post!", likeCount: 7}
    ],
    friends: [
        {ava: pingvin, id: "1", who: "With myself", message: "Hi!It's me!"},
        {ava: jiraf, id: "2", who: "Friend", message: "Hi!What's up?"}
    ]

        // { ava: this.friends[1].ava,id:this.friends[1].id,who:this.friends[1].who, message: this.friends[1].messages[-1].message}

};

export let addPost = (postTitle,postText) => {
    let newPost = {
        id:5,
        title:postTitle,
        text:postText,
        likeCount:10
    };
    state.postData.push(newPost);
}

export default state;
