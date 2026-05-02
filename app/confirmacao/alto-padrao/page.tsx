import { ConfirmacaoPage } from "@/components/confirmacao-page"
import { MetaPixels } from "@/components/meta-pixels"

export default function ConfirmacaoAltoPadrao() {
  return (
    <>
      <MetaPixels />
      <ConfirmacaoPage
        ticketName="EXPERIÊNCIA ALTO PADRÃO"
        checkoutUrl="https://payfast.greenn.com.br/pre-checkout/xdh7huk"
        variant="alto-padrao"
      />
    </>
  )
}
