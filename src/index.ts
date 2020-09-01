require("svelte/register")
import express from "express"
const App = require("./App.svelte").default

const app = express()

export function renderTemplate(html: string, css: string) {
  return `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
}

app.get("/", (_, res) => {
  const { html, css } = App.render({})
  const template = renderTemplate(html, css.code)
  res.send(template)
})

app.listen(8800, () => console.log("App listening on port 8800!"))
