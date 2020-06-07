export function renderTemplate(html: string, css: string) {
  return `
    <html>
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" type="text/css" href="reset.css">
        <style data-aphrodite>${css}</style>
      </head>
      <body>
        ${html}
      </body>
    </html>
  `
}
