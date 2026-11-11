import { createSlice } from "@reduxjs/toolkit";

export const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState:{
        isAdded:false
    }

,reducers:{ //actions
    toggle:(state)=>{
        state.isAdded = !state.isAdded
      }  }
})

export const {isAdded}= bookmarkSlice.actions

export default bookmarkSlice.reducer