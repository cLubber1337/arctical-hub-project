import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/testAsyncThunk'
import { Country } from 'app/entities/Country'
import { Currency } from 'app/entities/Currency'
import { updateProfileData } from './updateProfileData'
import { ValidationProfileError } from 'app/entities/Profile/model/types/profile'

const data = {
  username: 'admin',
  age: 30,
  country: Country.USA,
  lastname: 'Soroko',
  firstname: 'Andrey',
  city: 'Minneapolis',
  currency: Currency.USD,
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidationProfileError.SERVER_ERROR,
    ])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidationProfileError.INCORRECT_USER_DATA,
    ])
  })
})
