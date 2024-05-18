import { createSlice } from "@reduxjs/toolkit"
import { getUserProfile, userLogin } from "../action/auth"
import { set_access_token } from "../baseUrl"

const initialState = {
    userProfile: {},
    isLogged: false,
    loading: true,
    response: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            set_access_token(null)
            state.loading= false
        },
        loadOut: (state) => {
            // set_access_token(null)
            state.loading= false
        }

    },
    extraReducers: (builder) => {
        builder
        .addCase(getUserProfile.fulfilled,  (state, action) => {
            const data = action.payload
            console.log(data)
            
              state.userProfile = data
              state.isLogged = true
              state.loading = false
            }
        )
        .addCase(getUserProfile.pending,  (state, action) => {

            
            state.loading = true

        })
        .addCase(getUserProfile.rejected,  (state, action) => {
            state.loading = false
          
        })
        .addCase(userLogin.fulfilled, (state, action) => {
             const {user, token} = action.payload
             console.log(token)
             set_access_token(token)
            state.response = action.payload
            state.loading = false
            state.isLogged = true
        } )
        .addCase(userLogin.rejected, (state, action) => {
            // state.response = action.payload
            console.log(action.payload)

            state.loading = false
            state.isLogged = false

        } )
        .addCase(userLogin.pending, (state, action) => {
            // state.response = action.payload
            state.loading = true
            state.isLogged = false

        } )
    },
    
})
export default authSlice.reducer
export const { logOut, loadOut } = authSlice.actions;

// const exports {logOut} = authSlice.actions