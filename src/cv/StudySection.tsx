import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite"
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
      {study.description ? <p className={css(styles.description)}>{intl(study.description)}</p> : undefined}
    </div>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
    paddingBottom: 5
  },
  name: {
    fontSize: "1rem",
    paddingBottom: 5
  },
  description: {
    fontSize: "0.9rem",
    paddingBottom: 5
  },
  container: {
    paddingBottom: 20
  }
})
