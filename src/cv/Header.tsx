import React from "react"
import { VscFilePdf } from "react-icons/vsc"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"

import { useLang } from "../intl/useIntl"
import { Lang } from "src/intl/Intl"

interface Props {
  title: string
  name: string
  description: string
  showPdfDownload: boolean
}

export function Header({ title, name, description, showPdfDownload }: Props) {
  const lang = useLang()

  const nextLang: Lang = lang === "fr" ? "en" : "fr"

  return (
    <header className={css(styles.header)}>
      <div>
        <h1 className={css(styles.title)}>{title}</h1>
        <h2 className={css(styles.name)}>{name}</h2>
        <p className={css(styles.description)}>{description}</p>
      </div>
      <div className={css(styles.actions)}>
        {showPdfDownload ? (
          <div className={css(styles.langContainer)}>
            <a className={css(styles.lang)} href={`/cv/${nextLang}`}>
              {nextLang}
            </a>
          </div>
        ) : undefined}
        {showPdfDownload ? (
          <div>
            <a href={`/cv/pdf?lang=${lang}`}>
              <VscFilePdf size="30" color="#FFFFFF" />
            </a>
          </div>
        ) : undefined}
      </div>
    </header>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  header: {
    gridArea: "header",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 30,
    backgroundColor: "#3d7ad9",
    color: "#ffffff"
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  langContainer: {
    marginRight: 20
  },
  lang: {
    fontSize: "1.2rem",
    color: "#fff",
    textTransform: "uppercase",
    textDecoration: "none"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: 10
  },
  name: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    fontSize: ".9rem"
  }
})
