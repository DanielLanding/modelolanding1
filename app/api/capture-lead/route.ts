import { NextRequest, NextResponse } from "next/server"

// Maps the internal plan name to a SellFlux tag slug
const PLAN_TAG: Record<string, string> = {
  "LIGHT": "passaporte-light",
  "PREMIUM": "passaporte-premium",
  "EXPERIÊNCIA\nALTO PADRÃO": "passaporte-alto-padrao",
}

// Normalises any Brazilian phone input to E.164 (+55XXXXXXXXXXX)
function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "")
  if (digits.startsWith("55") && digits.length >= 12) return `+${digits}`
  return `+55${digits}`
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.SELLFLUX_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: "SELLFLUX_API_KEY not configured" },
      { status: 500 }
    )
  }

  const body = await req.json()
  const { nome, email, whatsapp, plano } = body as {
    nome: string
    email: string
    whatsapp: string
    plano: string
  }

  // SellFlux lead DTO
  const dto = {
    name: nome,
    email,
    phone: normalizePhone(whatsapp),
    source: "gigantes-2026",
    tags: [
      "gigantes-2026",
      PLAN_TAG[plano] ?? "passaporte",
    ],
  }

  const sfRes = await fetch("https://api.sellflux.com/v1/leads", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
    // Abort if SellFlux takes more than 8 s — never block the checkout redirect
    signal: AbortSignal.timeout(8_000),
  })

  if (!sfRes.ok) {
    const detail = await sfRes.text().catch(() => sfRes.statusText)
    return NextResponse.json(
      { error: detail },
      { status: sfRes.status }
    )
  }

  const data = await sfRes.json().catch(() => null)
  return NextResponse.json({ ok: true, data })
}
