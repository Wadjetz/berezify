import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData, Skill } from "./models"
import { StudySection } from "./StudySection"
import { useIntl, useMesages } from "../intl/useIntl"
import { SkillItem } from "./SkillItem"
import { Contact } from "./Contact"
import { SectionTitle } from "./SectionTitle"

interface Props {
  phone?: string
  data: CvData
}

function SkillSection({ title, skills }: { title: string; skills: Skill[] }) {
  const intl = useIntl()
  return (
    <div className={css(styles.skillSection)}>
      <h3 className={css(styles.subtitle)}>{title}</h3>
      {skills.map(skill => (
        <SkillItem key={intl(skill.title)} skill={skill} />
      ))}
    </div>
  )
}

export function SideBar({ data, phone }: Props) {
  const message = useMesages()
  const intl = useIntl()

  return (
    <aside className={css(styles.aside)}>
      <Contact phone={phone} person={data.person} />
      <section className={css(styles.skills)}>
        <SectionTitle title={message("skillsTitle")} />
        <SkillSection title={message("programmingLanguagesTitle")} skills={data.skills.programmingLanguages} />
        <SkillSection title={message("librariesTitle")} skills={data.skills.libraries} />
        <SkillSection title={message("databasesTitle")} skills={data.skills.databases} />
        <SkillSection title={message("othersTitle")} skills={data.skills.others} />
      </section>
      <section>
        <SectionTitle title={message("stydiesTitle")} />
        {data.studies.map(study => (
          <StudySection key={intl(study.studyName)} study={study} />
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
  },
  subtitle: {
    fontSize: "1rem",
    fontWeight: "bold",
    paddingBottom: 15
  },
  skillSection: {
    marginBottom: 10
  }
})
