import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../API/AuthService";

export const signInAction = createAsyncThunk('auth/signIn', async ({ login, password }) => {
    try {
        const { data } = await AuthService.signIn({ login, password })
        if (data.token) {
            window.localStorage.setItem('token', data.token)
        }
        return data
    } catch (err) {
        console.log(err)
    }
})

export const signInWithTokenAction = createAsyncThunk('auth/checkToken', async () => {
    try {
        const { data } = await AuthService.signInWithToken()
        return data
    } catch (err) {
        console.log(err)
    }
})

const authSlice = createSlice({
    name: 'authorization',
    initialState: {
        role: null,
        token: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.role = null
            state.token = null
            state.isLoading = false
        },
    },
    extraReducers: {
        [signInAction.pending]: (state) => {
            state.isLoading = true
        },
        [signInAction.fulfilled]: (state, action) => {
            state.isLoading = false
            state.role = action.payload.role
            state.token = action.payload.token
        },
        [signInAction.rejected]: (state, action) => {
            state.isLoading = false
        },
        [signInWithTokenAction.pending]: (state) => {
            state.isLoading = true
        },
        [signInWithTokenAction.fulfilled]: (state, action) => {
            state.isLoading = false
            state.role = action.payload?.role
            state.token = action.payload?.token
        },
        [signInWithTokenAction.rejected]: (state, action) => {
            state.isLoading = false
        },
    }
})

export const { logout } = authSlice.actions
export default authSlice.reducer