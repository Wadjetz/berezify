import puppeteer from "puppeteer"

export async function getPdfFromUrl(url: string) {
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH ?? "/usr/bin/chromium",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    headless: true
  })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: "networkidle0" })
  await page.emulateMediaType("screen")
  const pdf = await page.pdf({
    preferCSSPageSize: true,
    printBackground: true,
    format: "A4",
    margin: {
      top: "30px",
      right: "25px",
      bottom: "25px",
      left: "25px"
    }
  })
  await browser.close()
  return pdf
}
