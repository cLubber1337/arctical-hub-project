import React, { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader/PageLoader'
import { useSelector } from 'react-redux'
import { selectUserAuthData } from 'app/entities/User'

const AppRouter = () => {
  const isAuth = useSelector(selectUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      return !(route.authOnly && !isAuth)
    })
  }, [isAuth])

  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="page-wrapper">
                {element}
              </div>
            }/>
        ))}
      </Routes>
    </Suspense>
  )
}

export default memo(AppRouter)