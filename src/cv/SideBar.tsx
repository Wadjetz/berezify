import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData } from "./models"
import { StudySection } from "./StudySection"
import { useIntl, useMesages } from "../intl/useIntl"
import { SkillItem } from "./SkillItem"
import { Contact } from "./Contact"
import { SectionTitle } from "./SectionTitle"

interface Props {
  phone?: string
  data: CvData
}

export function SideBar({ data, phone }: Props) {
  const message = useMesages()
  const intl = useIntl()

  return (
    <aside className={css(styles.aside)}>
      <Contact phone={phone} person={data.person} />
      <section>
        <SectionTitle title={message("stydiesTitle")} />
        {data.studies.map(study => (
          <StudySection key={intl(study.studyName)} study={study} />
        ))}
      </section>
      <section className={css(styles.skills)}>
        <SectionTitle title={message("skillsTitle")} />
        {data.skills.programmingLanguages
          .concat(data.skills.librairies)
          .concat(data.skills.databases)
          .map(skill => (
            <SkillItem key={intl(skill.title)} skill={skill} />
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
  skills: {
    display: "flex",
    flexDirection: "column"
  }
})
