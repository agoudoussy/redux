import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0,
    },
    reducers:{
        addItems(state, action){
            const newItems=action.payload;
            const existingItems=state.items.find(item=>item.id==newItems.id);
            state.totalQuantity++;
            if(!existingItems){
                state.items.push({
                    id: newItems.id,
                    name:newItems.title,
                    price:newItems.price,
                    quantity:1,
                    totalPrice:newItems.price          
                })
            }else{
                existingItems.quantity++;
                existingItems.totalPrice=state.items.totalPrice+newItems.price;
            }
        },
        removeItems(state,action){
            const id=action.payload;
            const existingItems=state.items.find(item=>item.id===id);
            state.totalQuantity--;
            if(existingItems.quantity===1){
                state.items=state.items.filter(item=>item.id!==id);
            }else{
                existingItems.quantity--;
            }
        }
    }
})

export const cartActions=cartSlice.actions;

export default cartSlice;