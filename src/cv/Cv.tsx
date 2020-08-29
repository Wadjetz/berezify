import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData } from "./models"
import { useIntl } from "../intl/useIntl"
import { Header } from "./Header"
import { SideBar } from "./SideBar"
import { Content } from "./Content"

interface Props {
  data: CvData
}

export function Cv({ data }: Props) {
  const intl = useIntl()
  return (
    <div className={css(styles.container)}>
      <main className={css(styles.cv)}>
        <Header title={intl(data.title)} name={`${data.person.firstName} ${data.person.lastName}`} />
        <SideBar data={data} />
        <Content data={data} />
      </main>
    </div>
  )
}

const styles = StyleSheet.create<Record<string, CSSProperties>>({
  container: {
    backgroundColor: "#edf3ff",
    minHeight: "100vh"
  },
  cv: {
    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 2px 0px #999999",
    borderRadius: 3,

    display: "grid",
    gridTemplateColumns: "400px auto auto auto",

    gridTemplateRows: "auto",
    gridTemplateAreas: `
      "header header header header"
      "sidebar article article article"
    `,

    "@media screen and (min-width: 1000px)": {
      width: "1000px",
      margin: "auto"
    }
  }
})
