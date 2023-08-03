import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'


type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    Main = 'main',
    About = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found',

}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.Main]: '/',
  [AppRoutes.About]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.PROFILE]: '/profile',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.Main]: {
    path: RoutePath.main,
    element: <MainPage/>,
  },
  [AppRoutes.About]: {
    path: RoutePath.about,
    element: <AboutPage/>,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage/>,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>,
  },
}
