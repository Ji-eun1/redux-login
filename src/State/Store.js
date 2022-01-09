// 5. import configureStore
// 6. import userReducer
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/UserSlice'

// 7. configureStore 생성 ( redux-thunk added & Redux DevTools Extension is turned on )
export default configureStore({
    reducer:{
        user: userReducer,
    },
});