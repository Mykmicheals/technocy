import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    token: '',
    refreshToken: '',
    login: (token) => { },
    logout: () => { }
}

const authSlice = createSlice({
    name: auth,
    initialState: initialState,
    reducers:{
        
    },
})