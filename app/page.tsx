import { MarqueeCarousel } from "@/components/marquee-carousel"
import { WistiaVideo } from "@/components/wistia-video"
import { MobileNav } from "@/components/mobile-nav"

const TICKETS = [
  {
    name: "LIGHT",
    priceOld: "R$ 1.994,00",
    price: "R$ 997,00",
    loteBadge: "LOTE 1 — 50% OFF",
    lote2: "Lote 2: R$ 1.197,00",
    accentColor: "#0693e3",
    popular: false,
    items: [
      "Acesso aos 2 dias do evento",
      "Caneta e bloco de notas",
      "Sacola personalizada",
      "Água, café e lanches",
      "Pasta do evento",
    ],
  },
  {
    name: "PREMIUM",
    priceOld: "R$ 3.994,00",
    price: "R$ 1.997,00",
    loteBadge: "LOTE 1 — 50% OFF",
    lote2: "Lote 2: R$ 2.497,00",
    accentColor: "#0693e3",
    popular: true,
    items: [
      "Tudo do LIGHT",
      "Assentos na fileira de frente",
      "Grupo exclusivo no WhatsApp",
      "Caderno impresso do evento",
    ],
  },
  {
    name: "EXPERIÊNCIA\nALTO PADRÃO",
    priceOld: "R$ 15.994,00",
    price: "R$ 7.997,00",
    loteBadge: "LOTE 1 — 50% OFF",
    lote2: "Lote 2: R$ 8.997,00",
    accentColor: "#9b51e0",
    popular: false,
    items: [
      "Tudo do PREMIUM",
      "Lounge VIP com café gourmet",
      "Check-in prioritário (fura-fila)",
      "Acesso ao servidor exclusivo",
      "Kit: mousepad, squeeze, notebook, boné, caneca",
      "3º DIA: experiência no barco (all-inclusive zero-álcool)",
    ],
  },
]

const TESTIMONIALS = [
  {
    videoId: "vhbwaetg7w",
    name: "Maria de Fátima",
    role: "Proprietária da Fada Imóveis",
    quote:
      "Nossa imobiliária faturava R$ 8 milhões por ano... em apenas 7 meses, já vendemos R$ 99 milhões",
  },
  {
    videoId: "91hbvw7p7c",
    name: "Amauri Nobre",
    role: "Corretor & Proprietário",
    quote: "300 vendas MCMV em apenas 12 meses",
  },
  {
    videoId: "tzu9xexwqc",
    name: "Joel Gossmann",
    role: "Corretor & Proprietário",
    quote:
      "Eu era garçom e vendedor de loja... hoje ganhei R$ 1 milhão em comissão",
  },
  {
    videoId: null,
    name: "Rafael e Marelise",
    role: "Sócios - Imobiliária Lajeado",
    quote: "Aumento de 130% no faturamento em apenas 3 meses",
  },
]

const MENTOR_STATS = [
  { value: "+20.000", label: "alunos treinados" },
  { value: "+55.000", label: "pessoas em eventos ao vivo" },
  { value: "R$ 2bi+", label: "em vendas pessoais" },
  { value: "R$ 149M+", label: "em vendas pelos mentorados" },
]

export default function GigantesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ─── NAVBAR ─── */}
      <header className="navbar fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <a href="#hero" className="shrink-0">
            <img
              src="/logo-gigantes.svg"
              alt="Gigantes do Mercado Imobiliário"
              className="h-12 w-auto"
            />
          </a>
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase">
            {[
              ["#ingressos", "INGRESSOS"],
              ["#sobre", "SOBRE"],
              ["#edicao", "EDIÇÃO 2026"],
              ["#depoimentos", "DEPOIMENTOS"],
              ["#experiencia", "ALTO PADRÃO"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="navbar-link">
                {label}
              </a>
            ))}
          </div>
          <a
            href="#ingressos"
            className="shrink-0 hidden lg:flex text-white text-xs font-black px-6 py-3 rounded-full transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: "#0693e3", boxShadow: "0 4px 20px rgba(6,147,227,0.3)" }}
          >
            Resgatar 50% de desconto
          </a>
          <MobileNav />
        </nav>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section
          id="hero"
          className="hero-bg relative min-h-screen flex flex-col pt-24 overflow-hidden"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Glow background */}
          <div
            className="absolute top-1/3 left-1/2 pointer-events-none"
            style={{
              transform: "translate(-50%, -50%)",
              width: "700px",
              height: "700px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(6,147,227,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 relative z-10">
            <div className="flex flex-col items-center gap-6 max-w-4xl">
              <img
                src="/logo-gigantes.svg"
                alt="Gigantes do Mercado Imobiliário"
                className="w-56 md:w-72 lg:w-80"
              />
              <p
                className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase"
                style={{ color: "#0693e3" }}
              >
                Balneário Camboriú | Setembro de 2026
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-tight text-white">
                O EVENTO QUE ENTREGA A MAIOR INTELIGÊNCIA DE CONVERSÃO DE VENDAS
                DO MERCADO IMOBILIÁRIO
              </h1>
              <a
                href="#ingressos"
                className="mt-2 text-white font-black text-base md:text-lg px-10 py-4 rounded-full transition-all hover:scale-105"
                style={{
                  backgroundColor: "#0693e3",
                  boxShadow: "0 8px 40px rgba(6,147,227,0.35)",
                }}
              >
                Resgatar 50% de desconto
              </a>
            </div>
          </div>

        </section>

        {/* ─── CAROUSEL DE PARTICIPANTES ─── */}
        <MarqueeCarousel />

        {/* ─── SOBRE ─── */}
        <section id="sobre" className="sobre-section py-24">
          <div className="max-w-6xl mx-auto px-6">
            {/* Side-by-side: título | divider | texto */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              {/* Esquerda — h1 */}
              <div className="md:w-2/5 shrink-0">
                <p className="sobre-label text-xs font-semibold tracking-[0.35em] uppercase mb-4">
                  Sobre o evento
                </p>
                <h1 className="sobre-heading text-3xl md:text-4xl font-black uppercase leading-tight">
                  O que é o{" "}
                  <span style={{ color: "#0693e3" }}>
                    GIGANTES DO MERCADO IMOBILIÁRIO?
                  </span>
                </h1>
              </div>

              {/* Linha divisória vertical */}
              <div className="sobre-divider hidden md:block w-px self-stretch" />

              {/* Direita — parágrafos */}
              <div className="flex-1">
                <p className="sobre-lead text-lg mb-5 leading-relaxed font-semibold">
                  O evento que transforma corretores e imobiliárias, nas maiores
                  autoridades de seus mercados dentro e fora do Brasil!
                </p>
                <p className="sobre-body text-base leading-relaxed">
                  São dois dias de treinamento com o maior gerador de corretores
                  de sucesso do Brasil, desenhado exclusivamente para corretores,
                  gerentes de equipes de vendas e donos de imobiliária. São dois
                  dias inteiros de TREINAMENTO com técnicas de vendas,
                  fortalecimento emocional para vendas e gestão de clientes,
                  formar equipes de alta performance, e fazer cada corretor da
                  sua imobiliária FECHAR VENDAS TODOS OS MESES.
                </p>
              </div>
            </div>

          </div>

          {/* 4 fotos edge-to-edge */}
          <div className="mt-12 sobre-fotos-row">
            {["/altemiraoLadoPessoas", "/pessoas.png", "/pessoa2", "/pessoas3.png"].map((src, i) => (
              <div
                key={i}
                className="sobre-foto-item"
              >
                <img
                  src={src}
                  alt={`Participantes do evento ${i + 1}`}
                  className="sobre-foto-img"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ─── EDIÇÃO 2026 ─── */}
        <section id="edicao" className="edicao-section py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-xs font-semibold tracking-[0.35em] uppercase mb-4"
              style={{ color: "#0693e3" }}
            >
              Edição 2026
            </p>
            <h2 className="edicao-title text-3xl md:text-4xl font-black uppercase mb-12">
              Liberte seu potencial e domine a arte de vender
            </h2>
            <WistiaVideo videoId="hwa2nywg4h" />
          </div>
        </section>

        {/* ─── RESULTADOS ─── */}
        <section
          className="py-24 px-6 border-t border-white/5"
          style={{ background: "rgba(6,147,227,0.04)" }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 text-white">
              Os resultados dos nossos mentorados são{" "}
              <span style={{ color: "#0693e3" }}>SURREAIS</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span
                className="font-black"
                style={{ fontSize: "clamp(3rem,8vw,5rem)", color: "#0693e3" }}
              >
                +1 Bilhão
              </span>
            </div>
            <p className="text-white/50 text-lg mb-12">
              de reais em vendas acumuladas pelos alunos
            </p>
            <WistiaVideo videoId="5to2qn2ycj" />
          </div>
        </section>

        {/* ─── DEPOIMENTOS ─── */}
        <section id="depoimentos" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold tracking-[0.35em] uppercase mb-4"
                style={{ color: "#0693e3" }}
              >
                Histórias reais
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
                Depoimentos
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {t.videoId ? (
                    <WistiaVideo videoId={t.videoId} />
                  ) : (
                    <div
                      className="rounded-xl flex items-center justify-center"
                      style={{
                        aspectRatio: "16/9",
                        background: "rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span className="text-white/25 text-sm">Vídeo em breve</span>
                    </div>
                  )}
                  <div className="mt-4">
                    <h3 className="text-white font-bold text-base">{t.name}</h3>
                    <p className="text-sm mb-2" style={{ color: "#0693e3" }}>
                      {t.role}
                    </p>
                    <p className="text-white/50 text-sm italic">"{t.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERIÊNCIA ALTO PADRÃO ─── */}
        <section id="experiencia" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            {/* Imagens sobrepostas: iate (fundo) + pessoas2 (flutuante) */}
            <div className="flex flex-col md:flex-row gap-8 mb-16">
              {/* Cards sobrepostos à esquerda */}
              <div className="flex flex-col gap-6 md:w-1/2 w-full">
                <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/iate"
                    alt="Experiência em alto mar"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/pessoas2"
                    alt="Participantes"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
              {/* Texto à direita */}
              <div className="flex-1 flex flex-col justify-end">
                {/* ...texto existente... */}
                <div className="max-w-3xl">
                  <p
                    className="text-xs font-semibold tracking-[0.35em] uppercase mb-4"
                    style={{ color: "#9b51e0" }}
                  >
                    O Aprendizado no mais alto nível
                  </p>
                  <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-white">
                    Experiência<br />Alto Padrão
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    A experiência Alto Padrão é uma mentoria de dia inteiro em alto
                    mar, com o Altemir e mais 20 mentorados. Aprofundando o
                    conhecimento sobre ler pessoas em 10 minutos com material
                    impresso (apostila) inclusa. Para que você saia de lá
                    decifrando como corresponder a cada cliente e entrar na mente e
                    no coração deles rapidamente.
                  </p>
                  <p className="text-white/50 text-base leading-relaxed mb-8">
                    Viva esta experiência que ampliará sua visão sobre ser o corretor
                    que tem lista de clientes e investidores verdadeiros fãs seus.
                  </p>
                  <p className="font-bold text-lg" style={{ color: "#9b51e0" }}>
                    Altemir Rocha
                  </p>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className="max-w-3xl">
              <p
                className="text-xs font-semibold tracking-[0.35em] uppercase mb-4"
                style={{ color: "#9b51e0" }}
              >
                O Aprendizado no mais alto nível
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-8 text-white">
                Experiência<br />Alto Padrão
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                A experiência Alto Padrão é uma mentoria de dia inteiro em alto
                mar, com o Altemir e mais 20 mentorados. Aprofundando o
                conhecimento sobre ler pessoas em 10 minutos com material
                impresso (apostila) inclusa. Para que você saia de lá
                decifrando como corresponder a cada cliente e entrar na mente e
                no coração deles rapidamente.
              </p>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                Viva esta experiência que ampliará sua visão sobre ser o corretor
                que tem lista de clientes e investidores verdadeiros fãs seus.
              </p>
              <p className="font-bold text-lg" style={{ color: "#9b51e0" }}>
                Altemir Rocha
              </p>
            </div>

            {/* Checklist */}
            <div
              className="rounded-2xl p-8 mt-12"
              style={{
                background:
                  "linear-gradient(135deg, rgba(155,81,224,0.12) 0%, transparent 100%)",
                border: "1px solid rgba(155,81,224,0.3)",
              }}
            >
              <ul className="space-y-4">
                {[
                  "Mentoria intensiva de dia inteiro a bordo com apenas 20 participantes selecionados",
                  "Framework exclusivo das '9 Personalidades' — domine a arte de entender e persuadir qualquer cliente",
                  "Todas as bebidas zero-álcool inclusas (open bar)",
                  "Ambiente íntimo e de alto impacto para uma transformação real e duradoura",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <span
                      className="font-bold text-lg mt-0.5 shrink-0"
                      style={{ color: "#9b51e0" }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ─── INGRESSOS ─── */}
        <section id="ingressos" className="py-24 px-6 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p
                className="text-xs font-semibold tracking-[0.35em] uppercase mb-4"
                style={{ color: "#0693e3" }}
              >
                Garanta sua vaga
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
                Ingressos
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TICKETS.map((ticket) => (
                <div
                  key={ticket.name}
                  className="rounded-2xl p-8 flex flex-col relative"
                  style={{
                    border: ticket.popular
                      ? `2px solid ${ticket.accentColor}`
                      : `1px solid rgba(255,255,255,0.12)`,
                    background:
                      ticket.accentColor === "#9b51e0"
                        ? "linear-gradient(160deg, rgba(155,81,224,0.1) 0%, transparent 60%)"
                        : "transparent",
                    boxShadow: ticket.popular
                      ? `0 0 60px rgba(6,147,227,0.12)`
                      : "none",
                  }}
                >
                  {ticket.popular && (
                    <div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: ticket.accentColor }}
                    >
                      MAIS POPULAR
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-8">
                    <p className="text-white/40 text-xs font-semibold tracking-[0.3em] uppercase mb-2">
                      Passaporte
                    </p>
                    <h3
                      className="font-black text-2xl uppercase leading-tight mb-4 text-white whitespace-pre-line"
                    >
                      {ticket.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span
                        className="font-black text-3xl"
                        style={{ color: ticket.accentColor }}
                      >
                        {ticket.price}
                      </span>
                      <span className="text-white/30 text-sm line-through">
                        {ticket.priceOld}
                      </span>
                    </div>
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${ticket.accentColor}22`,
                        color: ticket.accentColor,
                      }}
                    >
                      {ticket.loteBadge}
                    </span>
                    <p className="text-white/30 text-xs mt-2">{ticket.lote2}</p>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2.5 flex-1 mb-8">
                    {ticket.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-white/60 text-sm"
                      >
                        <span
                          className="shrink-0 mt-0.5"
                          style={{ color: ticket.accentColor }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#"
                    className="block text-center text-white font-black py-3.5 rounded-full transition-opacity hover:opacity-85"
                    style={{ backgroundColor: ticket.accentColor }}
                  >
                    Comprar passaporte
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-white/50 text-sm">
                Grupo acima de 5 pessoas?{" "}
                <a
                  href="#"
                  className="hover:underline"
                  style={{ color: "#0693e3" }}
                >
                  Fale no WhatsApp para desconto especial
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ─── MENTOR ─── */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="order-1 md:order-2 flex justify-center">
                <img
                  src="/altemirDono"
                  alt="Altemir Rocha"
                  className="rounded-2xl w-full max-w-xs md:max-w-sm object-cover"
                  style={{
                    boxShadow: "0 0 80px rgba(6,147,227,0.15)",
                  }}
                />
              </div>
              {/* Bio */}
              <div className="order-2 md:order-1">
                <p
                  className="text-xs font-semibold tracking-[0.35em] uppercase mb-4"
                  style={{ color: "#0693e3" }}
                >
                  Quem vai te transformar
                </p>
                <h2 className="text-3xl font-black uppercase mb-3 text-white">
                  Altemir Rocha
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  Fundador do IBRACIV — Instituto Brasileiro de Aperfeiçoamento
                  para Corretores, Imobiliárias e Vendedores
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {MENTOR_STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl p-4"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <p className="font-black text-xl" style={{ color: "#0693e3" }}>
                        {stat.value}
                      </p>
                      <p className="text-white/50 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA FINAL ─── */}
        <section
          className="py-20 px-6 text-center"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(6,147,227,0.08) 100%)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 text-white">
            Garanta sua vaga agora
          </h2>
          <p className="text-white/60 mb-8 text-lg max-w-xl mx-auto">
            As vagas com 50% de desconto são limitadas. Não perca o preço do
            Lote 1.
          </p>
          <a
            href="#ingressos"
            className="inline-block text-white font-black text-lg px-12 py-5 rounded-full transition-all hover:scale-105"
            style={{
              backgroundColor: "#0693e3",
              boxShadow: "0 8px 40px rgba(6,147,227,0.4)",
            }}
          >
            Resgatar 50% de desconto
          </a>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <p className="text-white/30 text-sm">
          ©Copyright 2026 | Todos os direitos reservados
        </p>
      </footer>
    </div>
  )
}
