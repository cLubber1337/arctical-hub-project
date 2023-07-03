import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "../config/StateSchema"
import { counterReducer } from "app/entities/counter"
import { useDispatch } from "react-redux"
import { userReducer } from "app/entities/User"
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,

  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-ignore
  store.reducerManager = reducerManager


  return store
}


export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>()

