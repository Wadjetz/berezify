import React from "react"
import { StyleSheet, css } from "aphrodite"
import { CvData, Lang } from "./models"

interface Props {
  data: CvData
  lang: Lang
}

export function Cv({ data, lang }: Props) {
  console.log(data.title[lang], data.title, lang)
  return (
    <div className={css(styles.container)}>
      <h1 className={css(styles.title)}>{data.title[lang]}</h1>
      <h2 className={css(styles.name)}>{`${data.person.firstName} ${data.person.lastName}`}</h2>
    </div>
  )
}

const styles = StyleSheet.create({
  title: {},
  name: {},
  container: {}
})
