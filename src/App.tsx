import React from "react"
import { CvData, Lang } from "./cv/models"
import { Cv } from "./cv/Cv"

interface Props {
  cv: CvData
  lang: Lang
}

export function App({ cv, lang }: Props) {
  return <Cv lang={lang} data={cv} />
}
