import express from "express"
import { StyleSheetServer } from "aphrodite"
import React from "react"
import ReactDOMServer from "react-dom/server"

import { App } from "./App"
import { cvData } from "./data/CvData"
import { renderTemplate } from "./template/indexTemplate"
import { generatePDF } from "./pdf"
import { Lang } from "./intl/Intl"

const app = express()

function template(lang: Lang, phone?: string, isPdf: boolean = false, anonymous: boolean = false) {
  const { html, css } = StyleSheetServer.renderStatic(() =>
    ReactDOMServer.renderToString(<App anonymous={anonymous} lang={lang} data={cvData} isPdf={isPdf} phone={phone} />)
  )
  return renderTemplate("Berezify", html, css.content)
}

app.get("/", (_, res) => res.send(template("fr")))
app.get("/cv/fr", (_, res) => res.send(template("fr")))
app.get("/cv/en", (_, res) => res.send(template("en")))

app.get("/cv/pdf", async (req, res) => {
  const lang = (req.query["lang"] as Lang) ?? "fr"
  const phone = req.query["phone"] as string | undefined
  const anonymous = !req.query["anonymous"]
  const pdf = await generatePDF(template(lang, phone, true, anonymous))
  res.set({
    "Content-Type": "application/pdf",
    "Content-Length": pdf.length,
    "Content-disposition": 'attachment; filename="CV.pdf"'
  })
  res.send(pdf)
})

app.use(express.static("./public"))

app.listen(8800, () => console.log("App listening on port http://localhost:8800"))
