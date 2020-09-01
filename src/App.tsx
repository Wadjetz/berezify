import React from "react"

import { Lang } from "./intl/Intl"
import { IntlContext, initIntlState } from "./intl/IntlContext"

interface Props {
  lang: Lang
}

export function App({ lang, children }: React.PropsWithChildren<Props>) {
  return <IntlContext.Provider value={{ ...initIntlState, lang }}>{children}</IntlContext.Provider>
}
