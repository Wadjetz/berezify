import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite"
import { format } from "date-fns"

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
      <h4 className={css(styles.company)}>
        {experience.company} - {format(experience.startDate, "MMMM yyyy", { locale })} -{" "}
        {experience.endDate ? format(experience.endDate, "MMMM yyyy", { locale }) : undefined} - {experience.place}
      </h4>
      <p className={css(styles.description)}>{intl(experience.description)}</p>
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
  company: {
    fontSize: "1.1rem",
    paddingBottom: 5
  },
  description: {
    fontSize: "0.9rem",
    paddingBottom: 5
  },
  technologies: {
    display: "flex"
  },
  technology: {
    padding: 4,
    marginRight: 5,
    borderRadius: 3,
    backgroundColor: "#eeeeee"
  }
})
