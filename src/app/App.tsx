import React, { Suspense, useEffect } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTheme } from "app/providers/ThemeProvider"
import { AppRouter } from "app/providers/router"
import { Navbar } from "widgest/Navbar"
import { Sidebar } from "widgest/Sidebar"
import { useAppDispatch } from "app/providers/StoreProvider/config/store"
import { userActions } from "app/entities/User/model/slice/userSlice"

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData())
  },[dispatch])


  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback=''>
        <Navbar/>
        <div className='content-page'>
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App
