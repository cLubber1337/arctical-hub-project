import { StateSchema } from 'app/providers/StoreProvider'
import { selectProfileError } from './selectProfileError'

describe('selectProfileError.test', () => {
  test('should return error', () => {

    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'error'
      }
    }
    expect(selectProfileError(state as StateSchema)).toEqual('error')
  })
})
