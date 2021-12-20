import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity
    },
    reducers:{
        addItems(state, action){
            const newItems=action.payload;
            const existingItems=state.items.find(item=>item.id==newItems.id);
            if(!existingItems){
                state.items.push({
                    
                })
            }
        }
    }
})