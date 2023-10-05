import { selectProfileValidateErrors } from './selectProfileValidateErrors'
import { ValidationProfileError } from 'app/entities/Profile/model/types/profile'
import { StateSchema } from 'app/providers/StoreProvider'


describe('selectProfileValidateErrors.test', () => {
  test('should return array of errors', () => {

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidationProfileError.INCORRECT_AGE, ValidationProfileError.INCORRECT_COUNTRY]
      }
    }
    expect(selectProfileValidateErrors(state as StateSchema)).toEqual(['INCORRECT_AGE', 'INCORRECT_COUNTRY'])
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: undefined
      }
    }
    expect(selectProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
