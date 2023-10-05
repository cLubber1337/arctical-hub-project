import { validateProfileData } from './validateProfileData'
import { Country } from 'app/entities/Country'
import { Currency } from 'app/entities/Currency'
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

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data)

    expect(result).toEqual([])
  })

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' })

    expect(result).toEqual([
      ValidationProfileError.INCORRECT_USER_DATA,
    ])
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined })

    expect(result).toEqual([
      ValidationProfileError.INCORRECT_AGE,
    ])
  })

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined })

    expect(result).toEqual([
      ValidationProfileError.INCORRECT_COUNTRY,
    ])
  })

  test('incorrect all', async () => {
    const result = validateProfileData({})

    expect(result).toEqual([
      ValidationProfileError.INCORRECT_USER_DATA,
      ValidationProfileError.INCORRECT_AGE,
      ValidationProfileError.INCORRECT_COUNTRY,
    ])
  })
})
