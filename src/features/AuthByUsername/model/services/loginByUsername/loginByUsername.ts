import { createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "app/entities/User/model/types/user"
import i18n from "shared/config/i18n/i18n"
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage"
import { userActions } from "app/entities/User/model/slice/userSlice"
import { ThunkConfig } from "app/providers/StoreProvider"

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps,
    ThunkConfig<string>>(
      "login/loginByUsername",
      async ({ username, password }, thunkAPI) => {
        const { rejectWithValue, dispatch, extra } = thunkAPI
        try {
          const response = await extra.api.post<User>("login", {
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
