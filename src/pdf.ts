import puppeteer from "puppeteer"

export async function generatePDF(html: string) {
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
