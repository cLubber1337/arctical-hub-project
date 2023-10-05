import { StateSchema } from 'app/providers/StoreProvider'
import { selectProfileForm } from './selectProfileForm'
import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country'


const form = {
  firstname: 'Андрей',
  lastname: 'Сороко',
  age: 28,
  currency: Currency.EUR,
  country: Country.Germany,
  city: 'Minsk',
  username: 'clubber',
}
describe('selectProfileForm.test', () => {
  test('should return form', () => {

    const state: DeepPartial<StateSchema> = {
      profile: {
        form
      }
    }
    expect(selectProfileForm(state as StateSchema)).toEqual(form)
  })
  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(selectProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
