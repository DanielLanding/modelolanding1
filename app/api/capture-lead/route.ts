import { NextRequest, NextResponse } from "next/server"

const PLAN_WEBHOOK: Record<string, string> = {
  "LIGHT": "https://webhook.sellflux.app/v2/webhook/custom/cc1ae8b959635b6b68df14a670c361d7",
  "PREMIUM": "https://webhook.sellflux.app/v2/webhook/custom/2207d6bce3bb9550051d770898bc48d4",
  "EXPERIÊNCIA\nALTO PADRÃO": "https://webhook.sellflux.app/v2/webhook/custom/784e012a6794d812924a5c54616b3fe5",
}

const PLAN_TAG: Record<string, string> = {
  "LIGHT": "GMI2026-LIGHT",
  "PREMIUM": "GMI2026-PREMIUM",
  "EXPERIÊNCIA\nALTO PADRÃO": "GMI2026-ALTOPADRAO",
}

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "")
  if (digits.startsWith("55") && digits.length >= 12) return `+${digits}`
  return `+55${digits}`
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nome, email, whatsapp, plano } = body as {
    nome: string
    email: string
    whatsapp: string
    plano: string
  }

  const webhookUrl = PLAN_WEBHOOK[plano]
  if (!webhookUrl) {
    return NextResponse.json({ error: "Plano inválido" }, { status: 400 })
  }

  const tag = PLAN_TAG[plano]
  const phone = normalizePhone(whatsapp)

  const sellfluxDto = {
    name: nome,
    email,
    phone,
    source: "gigantes-2026",
    tags: [tag],
  }

  const leadnoseDto = {
    name: nome,
    phone,
    email,
    tag,
    description: `Nome: ${nome}, WhatsApp: ${whatsapp}, Email: ${email}`,
    qualificado: false,
  }

  const [sfRes, lnRes] = await Promise.all([
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sellfluxDto),
      signal: AbortSignal.timeout(8_000),
    }),
    fetch("https://bot-api.leadnose.com/leadsdaniel/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadnoseDto),
      signal: AbortSignal.timeout(8_000),
    }),
  ])

  if (!sfRes.ok) {
    const detail = await sfRes.text().catch(() => sfRes.statusText)
    return NextResponse.json({ error: `SellFlux: ${detail}` }, { status: sfRes.status })
  }

  if (!lnRes.ok) {
    const detail = await lnRes.text().catch(() => lnRes.statusText)
    return NextResponse.json({ error: `LeadNose: ${detail}` }, { status: lnRes.status })
  }

  const data = await sfRes.json().catch(() => null)
  return NextResponse.json({ ok: true, data })
}
