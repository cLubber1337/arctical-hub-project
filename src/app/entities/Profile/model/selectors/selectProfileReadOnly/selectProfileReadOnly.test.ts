import { StateSchema } from 'app/providers/StoreProvider'
import { selectProfileReadOnly } from './selectProfileReadOnly'


describe('selectProfileReadOnly.test', () => {
  test('should return true with readonly: true', () => {

    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true
      }
    }
    expect(selectProfileReadOnly(state as StateSchema)).toEqual(true)
  })
  test('should return false with no readonly: false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false
      }
    }
    expect(selectProfileReadOnly(state as StateSchema)).toEqual(false)
  })
})
