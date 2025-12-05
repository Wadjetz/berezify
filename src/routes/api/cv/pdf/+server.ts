import { getPdfFromUrl } from "$lib/utils/pdf"

import type { RequestHandler } from "./$types"

export const GET = (async ({ url }) => {
  const locale = url.searchParams.get("locale")
  const renderUrl = locale === "en" ? `${url.origin}/en/cv${url.search}` : `${url.origin}/cv${url.search}`
  const pdf = await getPdfFromUrl(renderUrl)
  return new Response(Buffer.from(pdf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length.toString(),
      "Content-disposition": 'attachment; filename="CV.pdf"'
    }
  })
}) satisfies RequestHandler
