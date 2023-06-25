import { ReactNode } from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import i18nForTests from "../../../config/i18n/i18nForTests"
import { I18nextProvider } from "react-i18next"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { DeepPartial } from "@reduxjs/toolkit"


export interface ComponentRenderOptions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}


export const ComponentRender =
    (component: ReactNode, { route = "/", initialState }: ComponentRenderOptions = {}) => {
      return render(
        <StoreProvider initialState={initialState}>
          <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
              {component}
            </I18nextProvider>
          </MemoryRouter>
        </StoreProvider>
      )}