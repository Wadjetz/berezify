import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData } from "./models"
import { StudySection } from "./StudySection"
import { useIntl, useMesages } from "../intl/useIntl"
import { SkillSection } from "./SkillSection"

interface Props {
  data: CvData
  isPdf: boolean
}

export function SideBar({ data, isPdf }: Props) {
  const message = useMesages()
  const intl = useIntl()
  return (
    <aside className={css(styles.aside)}>
      <section className={css(styles.contact)}>
        <h2 className={css(styles.sideBarSectionTitle)}>{message("contactTitle")}</h2>
        <a href={`mailto:${data.person.email}`} className={css(styles.email)}>
          {data.person.email}
        </a>
      </section>
      {!isPdf ? (
        <a className={css(styles.pdf)} href="/cv/pdf">Download PDF</a>
      ) : undefined}
      <section>
        <h2 className={css(styles.sideBarSectionTitle)}>{message("stydiesTitle")}</h2>
        {data.studies.map(study => (
          <StudySection key={intl(study.studyName)} study={study} />
        ))}
      </section>
      <section className={css(styles.skills)}>
        <h2 className={css(styles.sideBarSectionTitle)}>{message("skillsTitle")}</h2>
        {data.skills.programmingLanguages
          .concat(data.skills.librairies)
          .concat(data.skills.databases)
          .map(skill => (
            <SkillSection key={intl(skill.title)} skill={skill} />
          ))}
      </section>
    </aside>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  aside: {
    gridArea: "sidebar",
    backgroundColor: "#ffffff",
    padding: 30
  },
  contact: {
    marginBottom: 20
  },
  email: {
    color: "#3d7ad9",
  },
  pdf: {
    display: "block",
    marginBottom: 20,
    color: "#3d7ad9",
  },
  sideBarSectionTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: 15,
    color: "#666666"
  },
  skills: {
    display: "flex",
    flexDirection: "column"
  }
})
