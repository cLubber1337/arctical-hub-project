import { ReactNode } from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import i18nForTests from "../../../src/shared/config/i18n/i18nForTests"
import { I18nextProvider } from "react-i18next"


export interface ComponentRenderOptions {
    route?: string
}


export const ComponentRender =
    (component: ReactNode, { route = "/" }: ComponentRenderOptions = {}) => {
      return render(
        <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nForTests}>
            {component}
          </I18nextProvider>
        </MemoryRouter>
      )
    }
