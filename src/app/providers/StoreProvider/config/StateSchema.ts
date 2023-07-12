import { CounterSchema } from "app/entities/counter"
import { UserSchema } from "app/entities/User/model/types/user"
import { LoginSchema } from "features/AuthByUsername/model/types/loginSchema"
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { ProfileSchema } from "app/entities/Profile"
import { AxiosInstance } from "axios"
import { To } from "@remix-run/router"
import { NavigateOptions } from "react-router/dist/lib/context"

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    //Async reducer
    login?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}
export interface  ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}
