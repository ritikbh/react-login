import { createSlice }  from "@reduxjs/toolkit";


export const userSlice = createSlice({
 name:"user",
 initialState:{
     user:null
 },
 reducers:{
     // update state thats why using payload
     login: (state,action) =>{            
state.user = action.payload;
     },
     logout: (state) =>{                        // updates the state to null , no payload action required

        state.user = null;
     },

 },


});

export const { login, logout } = userSlice.actions;           // Exporting 2 actions

export const selectUser = (state) => state.user.user; // update user in user

export default userSlice.reducer;