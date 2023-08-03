import { StateSchema } from 'app/providers/StoreProvider'
import { selectLoginUsername } from './selectLoginUsername'

describe('selectLoginUsername.test', () => {
  test('should return current username', () => {

    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'andrey'
      }
    }
    expect(selectLoginUsername(state as StateSchema)).toEqual('andrey')
  })
  test('should return \'\' with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(selectLoginUsername(state as StateSchema)).toEqual('')})
})
