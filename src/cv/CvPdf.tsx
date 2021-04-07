import React from "react"
import { StyleSheet, css, CSSProperties } from "aphrodite/no-important"
import { CvData } from "./models"
import { useIntl } from "../intl/useIntl"
import { Header } from "./Header"
import { SideBar } from "./SideBar"
import { Content } from "./Content"

interface Props {
  data: CvData
  phone?: string
  anonymous: boolean
}

export function CvPdf({ data, phone, anonymous }: Props) {
  const intl = useIntl()
  return (
    <div className={css(styles.container)}>
      <main className={css(styles.cv)}>
        <Header showPdfDownload={false} title={intl(data.title)} description={intl(data.person.description)} />
        <SideBar phone={phone} data={data} anonymous={anonymous} />
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
    display: "grid",
    gridTemplateColumns: "350px auto auto auto",
    gridTemplateRows: "auto",
    gridTemplateAreas: `
      "header header header header"
      "sidebar article article article"
    `,
    width: "1000px",
    margin: "auto"
  }
})
