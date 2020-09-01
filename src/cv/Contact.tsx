import React from "react"
import { AiOutlineMail, AiOutlinePhone, AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { useMesages } from "../intl/useIntl"
import { SectionTitle } from "./SectionTitle"
import { Person } from "./models"

interface Props {
  person: Person
  phone?: string
}

export function Contact({ phone, person: { email, twitter, linkedin, github } }: Props) {
  const message = useMesages()

  return (
    <section className={css(styles.contact)}>
      <SectionTitle title={message("contactTitle")} />
      <div className={css(styles.item)}>
        <AiOutlineMail size="20" color="#3d7ad9" />
        <a href={`mailto:${email}`} className={css(styles.itemLink)}>
          {email}
        </a>
      </div>
      {github ? (
        <div className={css(styles.item)}>
          <AiFillGithub size="20" color="#3d7ad9" />
          <a href={`https://github.com/${github}`} className={css(styles.itemLink)}>
            {github}
          </a>
        </div>
      ) : undefined}
      {linkedin ? (
        <div className={css(styles.item)}>
          <AiFillLinkedin size="20" color="#3d7ad9" />
          <a href={`https://www.linkedin.com/in/${linkedin}`} className={css(styles.itemLink)}>
            {linkedin}
          </a>
        </div>
      ) : undefined}
      {twitter ? (
        <div className={css(styles.item)}>
          <AiOutlineTwitter size="20" color="#3d7ad9" />
          <a href={`https://twitter.com/${twitter}`} className={css(styles.itemLink)}>
            {twitter}
          </a>
        </div>
      ) : undefined}
      {phone ? (
        <div className={css(styles.item)}>
          <AiOutlinePhone size="20" color="#3d7ad9" />
          <a href={`tel:${phone}`} className={css(styles.itemLink)}>
            {phone}
          </a>
        </div>
      ) : undefined}
    </section>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  contact: {
    marginBottom: 20
  },
  itemLink: {
    marginLeft: 5,
    color: "#3d7ad9",
    textDecoration: "none"
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  }
})
