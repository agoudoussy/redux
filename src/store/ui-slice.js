const { configureStore, createSlice } = require("@reduxjs/toolkit");

const uiSlice=createSlice({
    name:"ui",
    initialState:{
        isShow:false
    },
    reducers:{
        toogle(state){
            state.isShow=!state.isShow
        }
    }
})

export const uiActions=uiSlice.actions;

export default uiSlice;
