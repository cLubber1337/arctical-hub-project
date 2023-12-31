import { StateSchema } from 'app/providers/StoreProvider'
import { selectLoginError } from './selectLoginError'

describe('selectLoginError.test', () => {
  test('should return data', () => {

    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'error'
      }
    }
    expect(selectLoginError(state as StateSchema)).toEqual('error')
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(selectLoginError(state as StateSchema)).toEqual(undefined)
  })
})
