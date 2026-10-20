// Prints /resume to public/resume.pdf with the page's own print styles.
// Usage: start the site (npm run dev or npm run preview), then npm run resume:pdf [url]
import puppeteer from "puppeteer-core"

const url = process.argv[2] ?? "http://localhost:4321/resume"
const executablePath =
  process.env.CHROME_PATH ??
  {
    darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    linux: "/usr/bin/google-chrome",
    win32: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  }[process.platform]

const browser = await puppeteer.launch({ executablePath, headless: true })
try {
  const page = await browser.newPage()
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }])
  await page.goto(url, { waitUntil: "networkidle0" })
  await page.evaluate(() => document.fonts.ready)
  await page.pdf({ path: "public/resume.pdf", format: "letter", printBackground: true, preferCSSPageSize: true })
  console.log(`Saved public/resume.pdf from ${url}`)
} finally {
  await browser.close()
}
