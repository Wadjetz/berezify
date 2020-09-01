import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { format } from "date-fns"
import MarkdownIt from "markdown-it"

import { Experience } from "./models"
import { useIntl, useDateLocal } from "../intl/useIntl"

interface Props {
  experience: Experience
}

export function ExperienceSection({ experience }: Props) {
  const intl = useIntl()
  const locale = useDateLocal()

  return (
    <div className={css(styles.container)}>
      <h3 className={css(styles.title)}>
        {experience.freelance ? "Freelance" : undefined} {intl(experience.title)}
      </h3>
      <div className={css(styles.infos)}>
        <div className={css(styles.company)}>{experience.company}</div>
        <div className={css(styles.dates)}>
          {format(experience.startDate, "MMMM yyyy", { locale })} -{" "}
          {experience.endDate ? format(experience.endDate, "MMMM yyyy", { locale }) : undefined}
        </div>
      </div>
      <div
        className={css(styles.description)}
        dangerouslySetInnerHTML={{ __html: MarkdownIt().render(intl(experience.description)) }}
      />
      <ul className={css(styles.technologies)}>
        {experience.technologies.map(({ name }) => (
          <li key={name} className={css(styles.technology)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  container: {
    paddingBottom: 30
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    paddingBottom: 5
  },
  infos: {
    paddingBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  company: {
    fontSize: "1.1rem",
    color: "#3d7ad9"
  },
  dates: {
    fontSize: "1rem"
  },
  description: {
    fontSize: "0.9rem",
    paddingBottom: 5
  },
  technologies: {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  technology: {
    padding: 4,
    marginRight: 5,
    borderRadius: 3,
    backgroundColor: "#eeeeee"
  }
})
