import React from "react"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import HomeIcon from "shared/assets/icons/home.svg"
import InfoIcon from "shared/assets/icons/info.svg"
import ProfileIcon from "shared/assets/icons/profile.svg"

export interface SidebarItemType {
    path: string
    text: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: "Главная",
    Icon: HomeIcon
  },
  {
    path: RoutePath.about,
    text: "O сайте",
    Icon: InfoIcon
  },
  {
    path: RoutePath.profile,
    text: "Профиль",
    Icon: ProfileIcon
  }

]
