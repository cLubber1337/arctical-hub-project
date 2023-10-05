import { StateSchema } from 'app/providers/StoreProvider'
import { selectProfileIsLoading } from './selectProfileIsLoading'


describe('selectProfileIsLoading.test', () => {
  test('should return true with loading', () => {

    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }
    expect(selectProfileIsLoading(state as StateSchema)).toEqual(true)
  })
  test('should return false with no loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false
      }
    }
    expect(selectProfileIsLoading(state as StateSchema)).toEqual(false)
  })
})
