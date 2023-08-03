import { StateSchema } from 'app/providers/StoreProvider'
import { selectLoginIsLoading } from './selectLoginIsLoading'

describe('selectLoginIsLoading.test', () => {
  test('should return true', () => {

    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true
      }
    }
    expect(selectLoginIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should return false with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(selectLoginIsLoading(state as StateSchema)).toEqual(false)})
})
