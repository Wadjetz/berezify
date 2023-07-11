import { loadLocaleAsync } from "$lib/i18n/i18n-util.async"

import type { LayoutLoad } from "./$types"

export const prerender = true

export const load = (async event => {
  await loadLocaleAsync(event.data.locale)
  return event.data as App.Locals
}) satisfies LayoutLoad
