import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData } from "./models"
import { useIntl } from "../intl/useIntl"
import { Header } from "./Header"
import { SideBar } from "./SideBar"
import { Content } from "./Content"

interface Props {
  data: CvData
  isPdf?: boolean
}

export function Cv({ data, isPdf = false }: Props) {
  const intl = useIntl()
  return (
    <div className={css(styles.container)}>
      <main className={css(styles.cv)}>
        <Header title={intl(data.title)} name={`${data.person.firstName} ${data.person.lastName}`} />
        <SideBar isPdf={isPdf} data={data} />
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
    display: "grid",
    gridTemplateRows: "auto",

    gridTemplateColumns: "auto",
    gridTemplateAreas: `
      "header"
      "article"
      "sidebar"
    `,

    backgroundColor: "#ffffff",
    boxShadow: "0px 0px 2px 0px #999999",
    borderRadius: 3,

    "@media screen and (min-width: 1000px)": {
      gridTemplateColumns: "400px auto auto auto",
      gridTemplateAreas: `
        "header header header header"
        "sidebar article article article"
      `,
      width: "1000px",
      margin: "auto"
    }
  }
})
