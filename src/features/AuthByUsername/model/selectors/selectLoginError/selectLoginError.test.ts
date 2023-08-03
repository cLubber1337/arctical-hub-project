import { StateSchema } from 'app/providers/StoreProvider'
import { selectLoginError } from './selectLoginError'

describe('selectLoginError.test', () => {
  test('should return error', () => {

    const state: DeepPartial<StateSchema> = {
      login: {
        error: 'error'
      }
    }
    expect(selectLoginError(state as StateSchema)).toEqual('error')
  })
  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(selectLoginError(state as StateSchema)).toEqual(undefined)})
})
