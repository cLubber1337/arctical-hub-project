import { ProfileType, ValidationProfileError } from '../../types/profile'

export const validateProfileData = (profile?: ProfileType) => {

  if (!profile) {
    return [ValidationProfileError.NO_DATA]
  }

  const { firstname, age, country, lastname } = profile

  const errors: ValidationProfileError[] = []

  if (!firstname || !lastname) {
    errors.push(ValidationProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age))
    errors.push(ValidationProfileError.INCORRECT_AGE)

  if (!country) {
    errors.push(ValidationProfileError.INCORRECT_COUNTRY)
  }

  return errors

}