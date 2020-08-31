import React from "react"

import { CvData } from "./cv/models"
import { Cv } from "./cv/Cv"
import { Lang } from "./intl/Intl"
import { IntlContext, initIntlState } from "./intl/IntlContext"

interface Props {
  cv: CvData
  lang: Lang
  isPdf?: boolean
}

export function App({ cv, lang, isPdf = false }: Props) {
  return (
    <IntlContext.Provider value={{ ...initIntlState, lang }}>
      <Cv data={cv} isPdf={isPdf} />
    </IntlContext.Provider>
  )
}
