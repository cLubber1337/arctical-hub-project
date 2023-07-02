import { I18nextProvider } from "react-i18next"
import i18nForTests from "shared/config/i18n/i18nForTests"
import { DecoratorFn } from "@storybook/react"
import { Suspense } from "react"


export const TranslationDecorator: DecoratorFn = (Story) => (
  <I18nextProvider i18n={i18nForTests}>
    <Suspense fallback="">
      <Story/>
    </Suspense>
  </I18nextProvider>
)



