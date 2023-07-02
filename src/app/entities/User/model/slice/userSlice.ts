import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserSchema, User } from "../types/user"
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage"

const initialState: UserSchema = {
  authData: undefined
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<{ authData : User }>) => {
      state.authData = action.payload.authData
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    }
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
