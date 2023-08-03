import { Currency } from 'app/entities/Currency'
import { Country } from 'app/entities/Country/model/types/country'


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
}
