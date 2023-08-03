import React, { Suspense, useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgest/Navbar'
import { Sidebar } from 'widgest/Sidebar'
import { userActions } from 'app/entities/User/model/slice/userSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
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
