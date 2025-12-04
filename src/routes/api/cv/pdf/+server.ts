import { getPdfFromUrl } from "$lib/utils/pdf"

import type { RequestHandler } from "./$types"

export const GET = (async ({ url }) => {
  const locale = url.searchParams.get("locale")
  const pdf = await getPdfFromUrl(`${url.origin}/cv/${locale}${url.search}`)
  return new Response(Buffer.from(pdf), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Length": pdf.length + "",
      "Content-disposition": 'attachment; filename="CV.pdf"'
    }
  })
}) satisfies RequestHandler
