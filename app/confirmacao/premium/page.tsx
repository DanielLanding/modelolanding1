import { ConfirmacaoPage } from "@/components/confirmacao-page"
import { MetaPixels } from "@/components/meta-pixels"

export default function ConfirmacaoPremium() {
  return (
    <>
      <MetaPixels />
      <ConfirmacaoPage
        ticketName="PREMIUM"
        checkoutUrl="https://payfast.greenn.com.br/pre-checkout/qmzud7r"
        variant="premium"
      />
    </>
  )
}
