import React from "react"
import { CvData, Lang } from "./cv/models"
import { Cv } from "./cv/Cv"
import { LangContext } from "./LangContext"

interface Props {
  cv: CvData
  lang: Lang
}

export function App({ cv, lang }: Props) {
  return (
    <LangContext.Provider value={lang}>
      <Cv data={cv} />
    </LangContext.Provider>
  )
}
