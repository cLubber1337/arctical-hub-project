import { StateSchema } from 'app/providers/StoreProvider'
import { selectProfileData } from './selectProfileData'
import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country'


const data = {
  firstname: 'Андрей',
  lastname: 'Сороко',
  age: 28,
  currency: Currency.EUR,
  country: Country.Germany,
  city: 'Minsk',
  username: 'clubber',
  avatar: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.' +
        'jpg?w=996&t=st=1691067128' +
        '~exp=1691067728' +
        '~hmac=2c6a00c6a433796c44f043340d74a6b374d8cefdfbf0a671e4a21ee82f27d279'
}
describe('selectProfileData.test', () => {
  test('should return data', () => {

    const state: DeepPartial<StateSchema> = {
      profile: {
        data
      }
    }
    expect(selectProfileData(state as StateSchema)).toEqual(data)
  })
  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(selectProfileData(state as StateSchema)).toEqual(undefined)
  })
})
