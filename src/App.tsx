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
}

export function App({ lang, phone, isPdf, data }: React.PropsWithChildren<Props>) {
  return (
    <IntlContext.Provider value={{ ...initIntlState, lang }}>
      {isPdf ? <CvPdf phone={phone} data={data} /> : <Cv data={data} />}
    </IntlContext.Provider>
  )
}
