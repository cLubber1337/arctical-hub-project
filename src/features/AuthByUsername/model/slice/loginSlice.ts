import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
  username: '',
  error: '',
  isLoading: false,
  password: '',
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<{ username: string }>) => {
      state.username = action.payload.username
    },
    setPassword: (state, action: PayloadAction<{ password: string }>) => {
      state.password = action.payload.password
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.error = ''
      state.isLoading = true
    })
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = false

    })
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice


