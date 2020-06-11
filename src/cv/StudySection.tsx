import React from "react"
import { StyleSheet, css } from "aphrodite"
import { Study } from "./models"
import { useIntl } from "../intl/useIntl"

interface Props {
  study: Study
}

export function StudySection({ study }: Props) {
  const intl = useIntl()
  return (
    <div className={css(styles.container)}>
      <h3 className={css(styles.title)}>{intl(study.studyTitle)}</h3>
      <h4 className={css(styles.name)}>{intl(study.studyName)}</h4>
    </div>
  )
}

const styles = StyleSheet.create({
  title: {},
  name: {},
  container: {}
})
