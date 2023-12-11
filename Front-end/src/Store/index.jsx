import { configureStore } from '@reduxjs/toolkit'
import userConnectReducer from './userlogin.jsx'
import userAccountReducer from './useraccount.jsx'

const store = configureStore({
    reducer: {
        user: userConnectReducer,
        userAccount: userAccountReducer,
    }
})

export default store