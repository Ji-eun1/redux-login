// 1. import createSlice
import { createSlice } from "@reduxjs/toolkit";

// 2. userSlice 생성 ( states / action type / actionCreator / reducer 모두 한번에 작성 가능 )
export const userSlice = createSlice({
    name:"user",

    initialState:{
        user:null,
    },

    reducers:{
        login: (state, action) => {
            state.user = action.payload; // user state는 payload 데이터에 따라 업데이트 될 것임.
        },
        logout: (state) => {    // 로그아웃 할 때는 user state를 업데이트 할 필요가 없다.
            state.user = null;
        }
    }

})

// 3. export action type & actionCreator & state & reducer
export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;  

export default userSlice.reducer;