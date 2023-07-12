import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchProfileData, ProfileSchema, ProfileType } from "app/entities/Profile"


const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = ""
      state.isLoading = true
    })
    builder.addCase(fetchProfileData.fulfilled,
      (state, action: PayloadAction<ProfileType>
      ) => {
        state.isLoading = false
        state.data = action.payload

      })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})


export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
