import { FC, useEffect } from "react"
import { useStore } from "react-redux"
import { ReduxStoreWithManager } from "app/providers/StoreProvider"
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema"
import { Reducer } from "@reduxjs/toolkit"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch"

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}
type ReducersListEntry = [StateSchemaKey, Reducer]


interface DynamicModuleLoaderProps {
    reducers: ReducerList
    removeAfterUnmount?: boolean
}


export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> =
    ({ reducers, removeAfterUnmount, children }) => {
      const store = useStore() as ReduxStoreWithManager
      const dispatch = useAppDispatch()


      useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry)  => {
          store.reducerManager.add(name, reducer)
          dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
          if (removeAfterUnmount) {
            Object.entries(reducers).forEach(([name]: ReducersListEntry)  => {
              store.reducerManager.remove(name)
              dispatch({ type: `@destroy ${name} reducer` })
            })

          }

        }
        // eslint-disable-next-line
        }, [])

      return (
        <>
          {children}
        </>
      )
    }


