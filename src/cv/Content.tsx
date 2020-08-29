import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData } from "./models"
import { ExperienceSection } from "./ExperienceSection"
import { useMesages } from "../intl/useIntl"

interface Props {
  data: CvData
}

export function Content({ data }: Props) {
  const message = useMesages()
  return (
    <article className={css(styles.article)}>
      <h2 className={css(styles.experiencesTitle)}>{message("experiencesTitle")}</h2>
      <section>
        {data.experiences.map(experience => (
          <ExperienceSection key={experience.company} experience={experience} />
        ))}
      </section>
    </article>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  article: {
    gridArea: "article",
    padding: 30,
    backgroundColor: "#ffffff"
  },
  experiencesTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: 10,
    paddingBottom: 7,
    color: "#3d7ad9",
    borderBottomColor: "#3d7ad9",
    borderBottomStyle: "solid",
    borderBottomWidth: 1
  }
})
