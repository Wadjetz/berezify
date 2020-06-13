import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"

interface Props {
  title: string
  name: string
}

export function Header({ title, name }: Props) {
  return (
    <header className={css(styles.header)}>
      <h1 className={css(styles.title)}>{title}</h1>
      <h2 className={css(styles.name)}>{name}</h2>
    </header>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  header: {
    gridArea: "header",
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
