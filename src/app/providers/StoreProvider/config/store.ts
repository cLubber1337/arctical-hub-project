import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "../config/StateSchema"
import { counterReducer } from "app/entities/counter"
import { userReducer } from "app/entities/User"
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager"
import { $api } from "api/api"
import { To } from "@remix-run/router"
import { NavigateOptions } from "react-router/dist/lib/context"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
)
{
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,

  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate
        }
      }
    })
  })

  // @ts-ignore
  store.reducerManager = reducerManager
  return store
}


export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];



