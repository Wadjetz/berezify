import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData } from "./models"
import { StudySection } from "./StudySection"
import { ExperienceSection } from "./ExperienceSection"
import { useIntl, useMesages } from "../intl/useIntl"

interface Props {
  data: CvData
}

export function Cv({ data }: Props) {
  const message = useMesages()
  const intl = useIntl()
  return (
    <main className={css(styles.main)}>
      <div className={css(styles.cv)}>
        <header className={css(styles.header)}>
          <h1 className={css(styles.title)}>{intl(data.title)}</h1>
          <h2 className={css(styles.name)}>{`${data.person.firstName} ${data.person.lastName}`}</h2>
        </header>
        <aside className={css(styles.aside)}>
          <section>
            <h2 className={css(styles.email)}>{data.person.email}</h2>
          </section>

          <section>
            {data.studies.map(study => (
              <StudySection key={intl(study.studyName)} study={study} />
            ))}
          </section>
        </aside>
        <article className={css(styles.article)}>
          <h2 className={css(styles.experiencesTitle)}>{message("experiencesTitle")}</h2>
          <section>
            {data.experiences.map(experience => (
              <ExperienceSection key={experience.company} experience={experience} />
            ))}
          </section>
        </article>
      </div>
    </main>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  title: {
    fontSize: "2.1rem",
    fontWeight: "bold",
    marginBottom: 15
  },
  name: {},
  email: {},
  main: {
    backgroundColor: "#edf3ff",
    minHeight: "100vh"
  },
  cv: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 2px 0px #999999",
    borderRadius: 3,

    display: "grid",
    gridTemplateColumns: "400px auto auto auto", //grid-template-columns: auto 50px auto;

    gridTemplateRows: "auto",
    gridTemplateAreas: `
      "header header header header"
      "sidebar article article article"
    `,

    "@media screen and (min-width: 1000px)": {
      width: "1000px",
      margin: "auto"
    }
  },
  header: {
    gridArea: "header",
    padding: 30,
    backgroundColor: "#3d7ad9",
    color: "#ffffff"
  },
  aside: {
    gridArea: "sidebar",
    backgroundColor: "#ffffff",
    padding: 30
  },
  article: {
    padding: 30,
    gridArea: "article",
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
