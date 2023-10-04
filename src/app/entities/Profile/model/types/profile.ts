import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country/model/types/country'

export enum ValidationProfileError {
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_AGE = 'INCORRECT_AGE',
}

export interface ProfileType {
    firstname?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: ProfileType
    form?: ProfileType
    isLoading?: boolean
    error?: string
    readonly: boolean
    validateErrors?: Array<ValidationProfileError>
}
