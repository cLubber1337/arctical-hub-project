import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "../config/StateSchema"
import { counterReducer } from "app/entities/counter"
import { loginReducer } from "features/AuthByUsername"
import { useDispatch } from "react-redux"
import { userReducer } from "app/entities/User"

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>()

