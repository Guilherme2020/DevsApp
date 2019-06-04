const initialState = {
    chat: [],
    contacts: [],
    activeChat: '',
    activeChatTitle: '',
    activeChatMessages:[]
}



const ChatReducer = (state = initialState, action) => {

    // if(action.type == 'changeStatus'){
    //     return {...state,status:action.payload.status};
    // }
    if(action.type == 'setChatList'){
        return{...state,chats:action.payload.chats}   
    }

    if(action.type == 'setContactList'){
        return{...state,contacts:action.payload.users}
    }
    if(action.type == 'setActiveChat'){

        let chatTitle = '';
        for(let i in state.chats){
            if(state.chats[i].key == action.payload.chatid){
                chatTitle = state.chats[i].title;
            }
        }
        return{
            ...state,activeChat:action.payload.chatid,
            activeChatTitle:chatTitle
        }
    }
    if(action.type == 'setActiveChatMessage'){
        return{...state,activeChatMessages:action.payload.msgs}
    }

    return state;


}

export default ChatReducer;