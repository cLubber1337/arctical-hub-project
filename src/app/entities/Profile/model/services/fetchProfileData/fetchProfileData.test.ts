import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country'
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk/testAsyncThunk'
import { fetchProfileData } from './fetchProfileData'

const data = {
  username: 'admin',
  age: 30,
  country: Country.USA,
  lastname: 'Soroko',
  firstname: 'Andrey',
  city: 'Minneapolis',
  currency: Currency.USD,
}

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error login', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.reject({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
