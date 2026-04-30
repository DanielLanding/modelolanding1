import { ConfirmacaoPage } from "@/components/confirmacao-page"
import { MetaPixels } from "@/components/meta-pixels"

export default function ConfirmacaoLight() {
  return (
    <>
      <MetaPixels />
      <ConfirmacaoPage
        ticketName="LIGHT"
        checkoutUrl="https://payfast.greenn.com.br/pre-checkout/e24ebcg"
        variant="light"
      />
    </>
  )
}
