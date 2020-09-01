import React from "react"
import { VscFilePdf } from "react-icons/vsc"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"

import { useLang } from "../intl/useIntl"

interface Props {
  title: string
  name: string
  showPdfDownload: boolean
}

export function Header({ title, name, showPdfDownload }: Props) {
  const lang = useLang()
  return (
    <header className={css(styles.header)}>
      <div>
        <h1 className={css(styles.title)}>{title}</h1>
        <h2 className={css(styles.name)}>{name}</h2>
      </div>
      {showPdfDownload ? (
        <a href={`/cv/pdf?lang=${lang}`}>
          <VscFilePdf size="30" color="#FFFFFF" />
        </a>
      ) : undefined}
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
  title: {
    fontSize: "2.1rem",
    fontWeight: "bold",
    marginBottom: 15
  },
  name: {}
})
