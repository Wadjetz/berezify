import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"

interface Props {
  title: string
}

export function SectionTitle({ title }: Props) {
  return <h2 className={css(styles.title)}>{title}</h2>
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  title: {
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
