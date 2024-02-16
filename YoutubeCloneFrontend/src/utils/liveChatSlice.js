import { createSlice } from "@reduxjs/toolkit";
import { CHAT_LENGTH } from "./constants";

const liveChatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state,action) =>{

            //remove 1 message after 10 message are there
            state.messages.splice(CHAT_LENGTH,1);
          
           // state.messages.push(action.payload); 

           // but we want to have new element at bottom 
           // use 
           state.messages.unshift(action.payload);
        }

    }
})

export const {addMessage} = liveChatSlice.actions;

export default liveChatSlice.reducer;
