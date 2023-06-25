import { configureStore } from "@reduxjs/toolkit"
import { StateSchema } from "../config/StateSchema"
import { counterReducer } from "app/entities/counter"




export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer
    },
    preloadedState: initialState
  })
}
