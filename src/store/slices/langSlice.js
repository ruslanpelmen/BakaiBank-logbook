import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLang = createAsyncThunk('lang/getLang', async () => {
    try {
        const savedLang = window.localStorage.getItem('lang')
        if (savedLang !== 'ru' || savedLang !== 'kgz') {
            return 'ru'
        }
        return savedLang
    } catch (err) {
        console.log(err)
    }
})

const langSlice = createSlice({
    name: 'language',
    initialState: {
        currentLang: 'ru',
        isLoading: false,
    },
    reducers: {
        toggleLang: (state) => {
            const nextLang = state.currentLang === 'ru' ? 'kgz' : 'ru'
            state.currentLang = nextLang
            window.localStorage.setItem('lang', nextLang)
        }
    },
    extraReducers: {
        [getLang.pending]: (state) => {
            state.isLoading = true
        },
        [getLang.fulfilled]: (state, action) => {
            const nextLang = action.payload;
            window.localStorage.setItem('lang', nextLang)
            state.currentLang = nextLang
            state.isLoading = false
        },
        [getLang.rejected]: (state) => {
            state.currentLang = 'ru'
            state.isLoading = false
        }
    }
})

export const { toggleLang } = langSlice.actions
export default langSlice.reducer