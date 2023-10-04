import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { profileActions, ProfileType, selectProfileForm } from 'app/entities/Profile'
import { validateProfileData } from '../validateProfileData/validateProfileData'
import { ValidationProfileError } from 'app/entities/Profile/model/types/profile'


export const updateProfileData = createAsyncThunk<ProfileType, void,
    ThunkConfig<ValidationProfileError[]>>(
      'profile/updateProfileData',
      async (_, thunkAPI,) => {
        const { rejectWithValue, extra, getState, dispatch } = thunkAPI
        const formData = selectProfileForm(getState())

        const errors = validateProfileData(formData!)

        if (errors.length) {
          return rejectWithValue(errors)
        }


        try {
          const { data } = await extra.api.put<ProfileType>('profile', formData)
          dispatch(profileActions.setReadonly(true))
          return data
        } catch (e) {
          return rejectWithValue([ValidationProfileError.SERVER_ERROR])
        }
      }
    )
