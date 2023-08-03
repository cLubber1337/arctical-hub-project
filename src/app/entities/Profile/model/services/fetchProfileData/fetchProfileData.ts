import { createAsyncThunk } from '@reduxjs/toolkit'
import i18n from 'shared/config/i18n/i18n'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { ProfileType } from 'app/entities/Profile'


export const fetchProfileData = createAsyncThunk<ProfileType, void,
    ThunkConfig<string>>(
      'profile/fetchProfileData',
      async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI
        try {
          const { data } = await extra.api.get<ProfileType>('profile')
          return data
        } catch (e) {
          return rejectWithValue(i18n.t('Неверный логин или пароль'))
        }
      }
    )
