import { createSlice } from "@reduxjs/toolkit"
import { UserSchema } from "../types/user"

const initialState: UserSchema = {
  authData: undefined
}

const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice


