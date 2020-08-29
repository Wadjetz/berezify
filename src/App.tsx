import React from "react"

import { CvData } from "./cv/models"
import { Cv } from "./cv/Cv"
import { Lang } from "./intl/Intl"
import { IntlContext, initIntlState } from "./intl/IntlContext"

interface Props {
  cv: CvData
  lang: Lang
}

export function App({ cv, lang }: Props) {
  return (
    <IntlContext.Provider value={{ ...initIntlState, lang }}>
      <Cv data={cv} />
    </IntlContext.Provider>
  )
}
