import { detectLocale, i18n } from "$lib/i18n/i18n-util"
import { loadAllLocales } from "$lib/i18n/i18n-util.sync"
import type { Handle } from "@sveltejs/kit"
import { initAcceptLanguageHeaderDetector } from "typesafe-i18n/detectors"

loadAllLocales()
const L = i18n()

export const handle = (async ({ event, resolve }) => {
  const acceptLanguageHeaderDetector = initAcceptLanguageHeaderDetector(event.request)
  const locale = detectLocale(acceptLanguageHeaderDetector)
  const LL = L[locale]
  event.locals.locale = locale
  event.locals.LL = LL

  if (event.url.pathname === "/cv/en") {
    const LL = L["en"]
    event.locals.LL = LL
    event.locals.locale = "en"
  } else {
    const LL = L[locale]
    event.locals.locale = locale
    event.locals.LL = LL
  }

  return resolve(event, { transformPageChunk: ({ html }) => html.replace("%lang%", locale) })
}) satisfies Handle
