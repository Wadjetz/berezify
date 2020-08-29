import express from "express"
import { StyleSheetServer } from "aphrodite"
import React from "react"
import ReactDOMServer from "react-dom/server"

import { App } from "./App"
import { cvData } from "./data/CvData"
import { renderTemplate } from "./template/indexTemplate"

const app = express()

const { html, css } = StyleSheetServer.renderStatic(() => ReactDOMServer.renderToString(<App lang="fr" cv={cvData} />))

const template = renderTemplate(html, css.content)

app.get("/", (_, res) => res.send(template))
app.use(express.static("./public"))

app.listen(8800, () => console.log("App listening on port http://localhost:8800"))
