import React from "react"
import { StyleSheet, css } from "aphrodite"
import { CvData } from "./models"
import { LangContext } from "../LangContext"
import { StudySection } from "./StudySection"

interface Props {
  data: CvData
}

export function Cv({ data }: Props) {
  const lang = React.useContext(LangContext)
  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.title)}>{data.title[lang]}</h1>
      <h2 className={css(styles.name)}>{`${data.person.firstName} ${data.person.lastName}`}</h2>
      {data.person.studies.map(study => <StudySection key={study.studyName[lang]} study={study} />)}
    </div>
  )
}

const styles = StyleSheet.create({
  title: {},
  name: {},
  container: {}
})
