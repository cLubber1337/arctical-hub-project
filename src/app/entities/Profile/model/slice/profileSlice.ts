import { createSlice } from "@reduxjs/toolkit"
import { ProfileSchema } from "app/entities/Profile"


const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {}
})


export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
