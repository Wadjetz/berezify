import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { Skill } from "./models"
import { useIntl } from "../intl/useIntl"

interface Props {
  skill: Skill
}

export function SkillItem({ skill }: Props) {
  const intl = useIntl()
  return (
    <div className={css(styles.container)}>
      <span className={css(styles.title)}>{intl(skill.title)}</span>
    </div>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  container: {
    display: "inline-block",
    marginRight: 10,
    marginBottom: 15,
  },
  title: {
    padding: 4,
    borderRadius: 3,
    backgroundColor: "#eeeeee"
  }
})
