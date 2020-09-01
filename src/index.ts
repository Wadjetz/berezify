require("svelte/register")
import express from "express"
import puppeteer from "puppeteer"

import { renderTemplate } from "./template/indexTemplate"
const App = require("./App.svelte").default

const app = express()

app.get("/", (_, res) => {
  const { html, css } = App.render({})
  const template = renderTemplate(html, css.code)
  res.send(template)
})

async function generatePDF(html: string) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] })
  const page = await browser.newPage()
  await page.setContent(html)
  await page.emulateMediaType("screen")
  const pdf = await page.pdf({
    preferCSSPageSize: true,
    printBackground: true
  })
  await browser.close()
  return pdf
}

app.get("/cv/pdf", async (_, res) => {
  const { html, css } = App.render({})
  const template = renderTemplate(html, css.code)
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
