import { ProfileSchema } from '../types/profile'
import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country'
import { ValidationProfileError } from 'app/entities/Profile/model/types/profile'
import { profileActions, profileReducer, updateProfileData } from 'app/entities/Profile'

const data = {
  username: 'admin',
  age: 30,
  country: Country.USA,
  lastname: 'Soroko',
  firstname: 'Andrey',
  city: 'Minneapolis',
  currency: Currency.USD,
}

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }
    expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
    )).toEqual({ readonly: true })
  })

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }

    expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    })
  })

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }

    expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
              username: '123456',
            }),
    )).toEqual({
      form: { username: '123456' },
    })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidationProfileError.SERVER_ERROR],
    }

    expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    })
  })

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    })
  })
})
