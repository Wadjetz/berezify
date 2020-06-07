import React from "react"
import { StyleSheet, css } from "aphrodite"
import { Study } from "./models"
import { LangContext } from "../LangContext"

interface Props {
  study: Study
}

export function StudySection({ study }: Props) {
  const lang = React.useContext(LangContext)
  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.title)}>{study.studyTitle[lang]}</h1>
      <h2 className={css(styles.name)}>{study.studyName[lang]}</h2>
    </div>
  )
}

const styles = StyleSheet.create({
  title: {},
  name: {},
  container: {}
})
