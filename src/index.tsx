import express from "express"
import { StyleSheetServer } from "aphrodite"
import React from "react"
import ReactDOMServer from "react-dom/server"

import { App } from "./App"
import { cvData } from "./data/CvData"
import { renderTemplate } from "./template/indexTemplate"
import { generatePDF } from "./pdf"
import { Cv } from "./cv/Cv"
import { CvPdf } from "./cv/CvPdf"

const app = express()

app.get("/", (_, res) => {
  const { html, css } = StyleSheetServer.renderStatic(() =>
    ReactDOMServer.renderToString(
      <App lang="fr">
        <Cv data={cvData} />
      </App>
    )
  )
  const template = renderTemplate(html, css.content)
  res.send(template)
})

app.get("/cv/pdf", async (_, res) => {
  const { html, css } = StyleSheetServer.renderStatic(() =>
    ReactDOMServer.renderToString(
      <App lang="fr">
        <CvPdf data={cvData} isPdf />
      </App>
    )
  )
  const template = renderTemplate(html, css.content)
  const pdf = await generatePDF(template)
  res.set({
    "Content-Type": "application/pdf",
    "Content-Length": pdf.length,
    "Content-disposition": 'attachment; filename="CV.pdf"'
  })
  res.send(pdf)
})

app.use(express.static("./public"))

app.listen(8800, () => console.log("App listening on port http://localhost:8800"))
