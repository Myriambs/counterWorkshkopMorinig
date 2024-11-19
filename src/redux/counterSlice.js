import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
name:"counter",
initialState:{
   counter:100
} ,
reducers:{
increment:(state,action)=>{
    state.counter += 1
},
decrement:(state,action)=>{
    state.counter -=1
},
reset:(state,action)=>{
    state.counter =0
}

}


})
export const {increment,decrement,reset} = counterSlice.actions ;
export default counterSlice.reducer