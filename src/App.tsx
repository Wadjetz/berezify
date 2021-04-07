import React from "react"

import { Lang } from "./intl/Intl"
import { IntlContext, initIntlState } from "./intl/IntlContext"
import { CvPdf } from "./cv/CvPdf"
import { Cv } from "./cv/Cv"
import { CvData } from "./cv/models"

interface Props {
  lang: Lang
  isPdf: boolean
  phone?: string
  data: CvData
  anonymous: boolean
}

export function App({ lang, phone, isPdf, data, anonymous }: React.PropsWithChildren<Props>) {
  return (
    <IntlContext.Provider value={{ ...initIntlState, lang }}>
      {isPdf ? <CvPdf anonymous={anonymous} phone={phone} data={data} /> : <Cv anonymous={anonymous} data={data} />}
    </IntlContext.Provider>
  )
}
