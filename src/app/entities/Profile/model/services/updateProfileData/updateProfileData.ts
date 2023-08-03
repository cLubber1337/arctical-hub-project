import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { profileActions, ProfileType, selectProfileForm } from 'app/entities/Profile'


export const updateProfileData = createAsyncThunk<ProfileType, void,
    ThunkConfig<string>>(
      'profile/updateProfileData',
      async (_, thunkAPI,) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI
        const formData = selectProfileForm(getState())
        try {
          const { data } = await extra.api.put<ProfileType>('profile', formData)
          dispatch(profileActions.setReadonly(true))
          return data
        } catch (e) {
          return rejectWithValue(i18n.t('Неверный логин или пароль'))
        }
      }
    )
