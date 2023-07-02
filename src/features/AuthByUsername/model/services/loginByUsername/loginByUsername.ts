import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from "app/entities/User/model/types/user"
import i18n from "shared/config/i18n/i18n"
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage"
import { userActions } from "app/entities/User/model/slice/userSlice"

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps,
    { rejectValue: string }>(
      "login/loginByUsername",
      async ({ username, password }, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI
        try {
          const response = await axios.post<User>("http://localhost:8000/login", {
            username,
            password
          })
          if (!response.data) {
            throw new Error()
          }

          localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
          dispatch(userActions.setUserData({ authData: response.data }))

          return response.data
        } catch (e) {
          return rejectWithValue(i18n.t("Неверный логин или пароль"))
        }
      }
    )
