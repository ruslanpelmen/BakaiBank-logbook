import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"
import langSlice from "./slices/langSlice"

const store = configureStore({
    reducer: {
        lang: langSlice,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    },
})

export default store