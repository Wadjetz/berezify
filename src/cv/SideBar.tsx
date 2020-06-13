import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData } from "./models"
import { StudySection } from "./StudySection"
import { useIntl, useMesages } from "../intl/useIntl"

interface Props {
  data: CvData
}

export function SideBar({ data }: Props) {
  const message = useMesages()
  const intl = useIntl()
  return (
    <aside className={css(styles.aside)}>
      <section className={css(styles.contact)}>
        <h2 className={css(styles.contactTitle)}>{message("contactTitle")}</h2>
        <div className={css(styles.email)}>{data.person.email}</div>
      </section>
      <section>
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
  contactTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#666666"
  },
  email: {}
})
