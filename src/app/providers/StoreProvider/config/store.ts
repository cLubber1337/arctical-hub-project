import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "../config/StateSchema"
import { counterReducer } from "app/entities/counter"
import { userReducer } from "app/entities/User"





export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState
  })
}
