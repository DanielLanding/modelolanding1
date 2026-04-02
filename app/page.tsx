import { MarqueeCarousel } from "@/components/marquee-carousel"
import { WistiaVideo } from "@/components/wistia-video"
import { MobileNav } from "@/components/mobile-nav"

const TICKETS = [
  {
    name: "LIGHT",
    price: "R$ 997,00",
    lote2: "Lote 2: R$ 1.197,00",
    type: "standard" as const,
    items: [
      "Passaporte dia 1 e 2 do evento",
      "Caneta Corretor Vencedor",
      "Bloco de anotações GIGANTES",
      "Material dos patrocinadores",
      "Água durante todo o evento",
      "Água quente para chá ou chimarrão durante todo o evento",
      "Tote Bag personalizada do evento",
      "Café durante todo o evento",
      "Biscoitos durante todo o evento",
      "Pasta Corretor Vencedor",
      "CADEIRAS atrás do passaporte PREMIUM",
    ],
  },
  {
    name: "PREMIUM",
    price: "R$ 1.997,00",
    lote2: "Lote 2: R$ 2.497,00",
    type: "standard" as const,
    items: [
      "Passaporte dia 1 e 2 do evento",
      "Caneta Corretor Vencedor",
      "Bloco de anotações GIGANTES",
      "Material dos patrocinadores",
      "Água durante todo o evento",
      "Água quente para chá ou chimarrão durante todo o evento",
      "Tote Bag personalizada do evento",
      "Café durante todo o evento",
      "Biscoitos durante todo o evento",
      "Pasta Corretor Vencedor",
      "MESAS EM FRENTE AO PALCO",
      "Participação no grupo exclusivo do Whats do Gigantes 2026",
      "Apostila do evento inclusa",
    ],
  },
  {
    name: "EXPERIÊNCIA\nALTO PADRÃO",
    price: "R$ 7.997,00",
    lote2: "Lote 2: R$ 8.997,00",
    type: "premium" as const,
    items: [
      "Passaporte dia 1 e 2 do evento",
      "Caneta Corretor Vencedor",
      "Bloco de anotações GIGANTES",
      "Material dos patrocinadores",
      "Água durante todo o evento",
      "Água quente para chá ou chimarrão durante todo o evento",
      "Tote Bag personalizada do evento",
      "Café durante todo o evento",
      "Biscoitos durante todo o evento",
      "Pasta Corretor Vencedor",
      "MESAS EM FRENTE AO PALCO",
      "Participação no grupo exclusivo do Whats do Gigantes 2026",
      "Apostila do evento inclusa",
      "Mouse Pad Corretor Vencedor",
      "Squeeze Corretor Vencedor",
      "Livro ATA Corretor Vencedor",
      "Boné Gigantes do Mercado Imobiliário",
      "Acesso ao Lounge Vip com Coffee Break Gourmet os 2 dias do evento",
      "Garçom durante os dois dias do evento",
      "Credenciamento sem fila",
      "Caneca Corretor Vencedor",
      "MAIS o terceiro dia da Experiência Alto Padrão, um dia em alto mar com All Inclusive (bebidas zero álcool) em um dia de imersão na lancha com a mentoria: DOMINANDO SEUS CLIENTES ATRAVÉS DAS 9 PERSONALIDADES.",
    ],
  },
]

const TESTIMONIALS = [
  {
    videoId: "vhbwaetg7w",
    name: "Maria de Fátima (Proprietária da Fada Imóveis)",
    quote:
      '"Nossa imobiliária faturava R$ 8 milhões por ano. Conheci o Altamir no Gigantes 2023, entrei para a mentoria e, naquele mesmo ano, recebemos a meta de R$ 60 milhões e vendemos R$ 69 milhões. Após renovar, em apenas 7 meses, já vendemos R$ 99 milhões. A metodologia dele causou um desenvolvimento estrondoso em mim, como gestora, e em todas as nossas corretoras."',
  },
  {
    videoId: "91hbvw7p7c",
    name: "Amauri Nobre (Corretor de Imóveis e Proprietário da Amauri Assessoria Imobiliária)",
    quote:
      '"Quando conheceu o Altemir e seus ensinamentos, já atuava como corretor de imóveis e trabalhava como pintor nos finais de semana para complementar a renda. Após aplicar a metodologia fechou 300 negócios MCMV em 12 meses. Hoje é case de sucesso, destaque na sua cidade e região, bateu todos os recordes de vendas incluindo R$ 10 milhões em 30 dias e R$ 1 milhão em comissão em menos de 1 ano."',
  },
  {
    videoId: "tzu9xexwqc",
    name: "Joel Gossmann (Corretor e Proprietário da Joel Imóveis)",
    quote:
      '"Eu era garçom e vendedor de loja. Decidi empreender e abri minha própria imobiliária no quarto da minha casa. Hoje, em uma cidade de 20 mil habitantes, ganhei pelo terceiro mês consecutivo o prêmio de R$ 1 milhão em comissão no ano e bati R$ 10 milhões em vendas em 30 dias. Saí de um carro velho para ter uma caminhoneta do ano, apartamento na praia e mais de dez terrenos. Devo tudo ao Corretor Vencedor."',
  },
  {
    videoId: "5to2qn2ycj",
    name: "Rafael e Marelise (Sócios proprietários da Imobiliária Lajeado)",
    quote:
      '"Logo após adquirirmos 100% da sociedade da imobiliária, com a mentoria Supremus reestruturar tudo, formamos uma equipe totalmente nova, com pessoas que nunca tinham trabalhado no ramo imobiliário. O apoio que recebemos foi fundamental para reorganizar o time em tempo recorde e nos trazer agilidade, pois não podemos viver sem faturamento. Em 3 meses aumentamos 130% o nosso faturamento"',
  },
]

export default function GigantesPage() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* ─── MOBILE MENU (fora da navbar para evitar stacking context) ─── */}
      <MobileNav />

      {/* ─── NAVBAR ─── */}
      <header className="navbar fixed top-0 left-0 right-0 z-50">
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-10 py-4 lg:py-5 flex items-center justify-between lg:justify-center gap-8 lg:gap-12">
          <a href="#hero" className="shrink-0 navbar-logo-text">
            <span className="navbar-logo-gold">GIGANTES</span>{" "}
            <span className="text-white">2026</span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {[
              ["#hero", "Início"],
              ["#ingressos", "Ingressos"],
              ["#sobre", "Sobre o Evento"],
              ["#edicao", "Edição 2026"],
              ["#depoimentos", "Depoimentos"],
              ["#experiencia", "Experiência Alto Padrão"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="navbar-link">
                {label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* ─── HERO ─── */}
        <section
          id="hero"
          className="hero-bg relative flex flex-col pt-20 md:pt-24 pb-4 overflow-hidden"
          style={{ minHeight: "75vh" }}
        >
          {/* Suavização apenas na base para a divisão de seções */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628] pointer-events-none z-0" />
          {/* Mobile: gradiente extra para legibilidade sobre a foto */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/30 via-transparent to-[#0a1628]/90 pointer-events-none z-0 md:hidden" />

          {/* Content */}
          <div className="flex-1 flex flex-col items-center justify-end md:justify-center text-center px-4 md:px-6 py-8 md:py-12 relative z-10">
            <div className="bg-[#05070a]/40 md:bg-[#05070a]/15 backdrop-blur-[12px] md:backdrop-blur-[10px] backdrop-saturate-[120%] border border-white/10 rounded-2xl flex flex-col items-center relative z-10 mx-auto px-5 py-7 md:px-12 md:py-14 w-full max-w-[950px] shadow-lg">
              <img
                src="/logo-gigantes.svg"
                alt="Gigantes do Mercado Imobiliário"
                className="w-52 md:w-80 mb-5 md:mb-6"
              />
              <div className="flex items-center gap-2 md:gap-3 text-[12px] md:text-[16px] text-white/90 mb-5 md:mb-6 font-medium">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="shrink-0 opacity-80">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="tracking-wide">Balneário Camboriú | Setembro de 2026</span>
              </div>
              <h1 className="text-[18px] md:text-[27px] lg:text-[32px] font-black uppercase leading-[1.35] md:leading-[1.4] text-white text-center max-w-[850px] mb-6 md:mb-8">
                O EVENTO QUE ENTREGA{" "}
                <span className="text-[#f4c264]">
                  A MAIOR INTELIGÊNCIA DE CONVERSÃO DE VENDAS
                </span>{" "}
                DO MERCADO IMOBILIÁRIO.
              </h1>
              <a
                href="#ingressos"
                className="bg-[#f4c264] hover:bg-[#eab34e] text-black rounded-xl font-bold transition-colors block w-full max-w-[550px] text-center p-3 md:p-[1.4rem] text-[16px] md:text-[21px] tracking-wide"
              >
                Resgatar 50% de desconto
              </a>
            </div>
          </div>
        </section>

        {/* ─── CAROUSEL DE PARTICIPANTES ─── */}
        <MarqueeCarousel />

        {/* ─── SOBRE O EVENTO ─── */}
        <section id="sobre" className="sobre-section py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            {/* Scroll icon */}
            <div className="flex justify-center mb-10">
              <div className="scroll-icon text-gray-400">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="9" y="2" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 18v4M8 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
              {/* Left — heading */}
              <div className="md:w-1/2 shrink-0">
                <p className="sobre-label uppercase mb-4">
                  O QUE É O GIGANTES DO MERCADO IMOBILIÁRIO?
                </p>
                <h2 className="sobre-heading font-black leading-tight">
                  O evento que transforma corretores e imobiliárias, nas maiores autoridades de
                  seus mercados dentro e fora do Brasil!
                </h2>
              </div>

              {/* Right — paragraphs */}
              <div className="flex-1">
                <p className="sobre-lead text-lg mb-5 leading-relaxed font-semibold">
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
              <div key={i} className="sobre-foto-item">
                <img
                  src={src}
                  alt={`Participantes do evento ${i + 1}`}
                  className="sobre-foto-img"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ─── "VOCÊ QUER VERDADEIRAMENTE..." ─── */}
        <section className="cta-diferenciado pb-[100px] md:pb-[160px] relative z-10 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
            <p className="text-gray-600 text-base md:text-xl text-center md:text-left italic max-w-md leading-relaxed">
              Você quer verdadeiramente ser diferenciado ou quer ficar só pensando que é?
            </p>
            <a
              href="#ingressos"
              className="hero-cta-btn gold-btn-shiny w-full md:w-auto"
              style={{ maxWidth: "380px", padding: "1.1rem 2.5rem" }}
            >
              Quero garantir a promoção
            </a>
          </div>
        </section>

        {/* ─── EDIÇÃO 2026 — Vídeo com gradiente azul ─── */}
        <section id="edicao" className="edicao-section pt-[140px] md:pt-[230px] overflow-hidden relative flex flex-col justify-between z-20" style={{ marginTop: "-130px", minHeight: "auto", maxHeight: "none" }}>
          {/* WAVE (Inside top - White to Blue transition) */}
          <div className="absolute left-0 right-0 w-full pointer-events-none z-20" style={{ top: "-1px", transform: "scaleY(-1)" }}>
            <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: "130px" }}>
              <path
                d="M0,40 C600,150 900,0 1440,60 L1440,150 L0,150 Z"
                fill="#f5f5f7"
              />
            </svg>
          </div>

          {/* Blurred Background Image + Overlay Azul */}
          <div className="absolute inset-0 z-0 pointer-events-none -mt-10">
            <img
              src="/images/about-1.png"
              alt="Fundo Edição"
              className="w-full h-full object-cover blur-[50px] md:blur-[70px] scale-110 opacity-70"
            />
            <div className="absolute inset-0 bg-[#0a1628] mix-blend-color opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/85 via-[#0a1628]/60 to-[#122340]/90" />
          </div>

          {/* Luzes desfocadas adicionais */}
          <div className="absolute top-[10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0693e3]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-[10%] -right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/15 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />

          {/* Texts (Reduzidos para caber perfeitamente com o vídeo na tela) */}
          <div className="max-w-[1400px] w-full mx-auto text-center flex flex-col items-center relative z-10 px-6 mb-6 shrink-0">
            <h2 className="text-2xl md:text-4xl lg:text-[2.8rem] font-black mb-3 leading-tight">
              <span className="text-white">Gigantes do Mercado</span><br />
              <span className="text-white">Imobiliário</span>{" "}
              <span className="gold-shiny">Edição 2026</span>
            </h2>
            <p className="text-white/70 text-xs md:text-sm uppercase tracking-wider font-semibold max-w-2xl mx-auto">
              O EVENTO QUE ENTREGA A MAIOR INTELIGÊNCIA DE CONVERSÃO DE VENDAS DO MERCADO IMOBILIÁRIO.
            </p>
          </div>

          {/* Vídeo - Limitado em largura e altura para não empurrar o texto para fora da tela */}
          <div className="w-full max-w-[1550px] mx-auto px-4 md:px-10 flex flex-1 flex-col justify-end relative z-10 pb-0 overflow-hidden">
            <div className="w-full overflow-hidden bg-transparent mb-[-2px]">
              <WistiaVideo videoId="hwa2nywg4h" className="w-full" />
            </div>
          </div>
        </section>

        {/* ─── RESULTADOS + DEPOIMENTOS ─── */}
        <section id="depoimentos" className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#f5f5f7]">
          <div className="max-w-[1200px] mx-auto relative z-10">
            {/* Header: título + texto lado a lado */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-14">
              <div className="md:w-1/2">
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] mb-5 text-gray-800">
                  LIBERTE SEU POTENCIAL E DOMINE A ARTE DE VENDER.
                </p>
                <h2 className="text-[1.75rem] md:text-[2.5rem] font-black text-gray-900 leading-[1.15]">
                  Os resultados dos nossos mentorados são SURREAIS.
                </h2>
              </div>
              <div className="md:w-1/2 md:pt-8">
                <p className="text-gray-500 text-[15px] md:text-base leading-relaxed">
                  Somado o faturamento total dos nossos alunos podemos chegar facilmente a marca de
                  <strong className="text-gray-800"> +1 de Bilhão</strong> de reais em vendas no mercado imobiliário. Venha conhecer o GIGANTES 2026.
                </p>
              </div>
            </div>

            {/* 4 vídeos grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {TESTIMONIALS.map((t) => (
                <div key={t.name}>
                  <div className="rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                    <WistiaVideo videoId={t.videoId} aspectRatio="16 / 9" className="rounded-none" />
                  </div>
                  <div className="mt-5">
                    <h3 className="text-gray-900 font-bold text-[15px] md:text-base leading-snug">{t.name}</h3>
                    <p className="text-gray-400 text-[13px] mt-2.5 leading-relaxed italic">{t.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── EXPERIência ALTO PADRÃO ─── */}
        <section id="experiencia" className="experiencia-section flex items-center pt-[100px] md:pt-[140px] pb-16 md:pb-20 px-4 md:px-6 relative overflow-hidden z-20" style={{ marginTop: "-100px", minHeight: "auto" }}>
          {/* Blurred Background Image + Overlay Azul */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/about-1.png"
              alt="Experiência Contexto"
              className="w-full h-full object-cover blur-[80px] md:blur-[40px] scale-125 opacity-80"
            />
            {/* Color Overlays para tingir de azul e escurecer */}
            <div className="absolute inset-0 bg-[#0a1628] mix-blend-color opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0a1628]/70 to-[#122340]/90" />
          </div>

          {/* WAVE (Inside - White to Blue transition) */}
          <div className="absolute left-0 right-0 w-full pointer-events-none z-10" style={{ top: "-1px", transform: "scaleY(-1)" }}>
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" style={{ height: "auto" }}>
              <path
                d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
                fill="#f5f5f7"
              />
            </svg>
          </div>

          {/* Luzes desfocadas */}
          <div className="absolute top-[-5%] -right-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/15 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] -left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0693e3]/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />

          <div className="max-w-[1300px] w-full mx-auto relative z-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
              {/* Left — images (Overlapping layout - Centralizado à esquerda) */}
              <div className="md:w-1/2 relative min-h-[380px] md:min-h-[700px] w-full flex-shrink-0">
                {/* Back Image (Room) - Portrait e movida mais para baixo */}
                <div className="absolute top-[10%] md:top-[20%] left-[8%] md:left-[10%] w-[50%] md:w-[45%] aspect-[3/4] shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-0">
                  <img
                    src="/images/design-1.webp"
                    alt="Mentoria Sala"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Front Image (Yacht) - Menor e vinculada com o selo */}
                <div className="absolute top-[50%] md:top-[55%] left-[25%] md:left-[22%] w-[70%] md:w-[65%] aspect-[16/10] shadow-[0_25px_50px_rgba(0,0,0,0.6)] z-10">
                  <img
                    src="/iate"
                    alt="Iate em Alto Mar"
                    className="w-full h-full object-cover"
                  />

                  {/* Golden Seal - Fixado no canto superior esquerdo da imagem do Iate */}
                  <div className="absolute top-0 left-0 z-20" style={{ transform: "translate(-50%, -50%)" }}>
                    <img
                      src="/images/experiencia-boat.webp"
                      alt="Selo Experiência"
                      className="w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>
              </div>

              {/* Right — text */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <p className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-4 text-white/60">
                  O Aprendizado no mais alto nível
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black uppercase mb-8 leading-tight gold-shiny">
                  EXPERIÊNCIA<br />ALTO PADRÃO
                </h2>
                <p className="text-white/85 text-lg md:text-[1.1rem] leading-relaxed mb-8">
                  A experiência Alto Padrão é uma mentoria de dia inteiro em alto
                  mar, com o Altemir e mais 20 mentorados. Aprofundando o
                  conhecimento sobre ler pessoas em 10 minutos com material
                  impresso (apostila) inclusa. Para que você saia de lá
                  decifrando como corresponder a cada cliente e entrar na mente e
                  no coração deles rapidamente.
                </p>
                <div className="flex items-start gap-5 mb-6">
                  <img
                    src="/images/design-2-1.webp"
                    alt="Altemir Rocha"
                    className="w-16 h-16 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-white/70 text-sm md:text-[15px] leading-relaxed">
                      Viva esta experiência que ampliará sua visão sobre ser o corretor
                      que tem lista de clientes e investidores verdadeiros fãs seus.
                    </p>
                  </div>
                </div>
                <p className="text-3xl italic font-bold" style={{ color: "#D4A843", fontFamily: "var(--font-dancing), cursive, serif" }}>
                  Altemir Rocha
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* ─── GOLDEN MARQUEE ─── */}
        <div className="golden-marquee">
          <div className="golden-marquee-track">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="golden-marquee-item">
                GARANTA O SEU PASSAPORTE ✦
              </span>
            ))}
          </div>
        </div>

        {/* ─── INGRESSOS / PLANOS ─── */}
        <section id="ingressos" className="relative py-24 md:py-32 px-6 overflow-hidden" style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1a30 50%, #0a1628 100%)" }}>
          {/* Luzes desfocadas */}
          <div className="absolute top-[-5%] -left-[5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D4A843]/8 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0" />
          <div className="absolute bottom-[10%] -right-[5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0693e3]/10 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0" />
          <div className="absolute top-[50%] left-[40%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#D4A843]/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0" />

          <div className="max-w-[1200px] mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-black text-white leading-tight mb-4">
                Escolha seu passaporte e garanta<br />sua vaga no GIGANTES 2026
              </h2>
              <p className="text-white/40 text-sm md:text-base italic">
                Os preços são promocionais e por tempo limitado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
              {TICKETS.map((ticket) => {
                const isPremium = ticket.type === "premium";
                const isMid = ticket.name === "PREMIUM";

                // 3 tiers: light (base), premium (mid-accent), alto padrão (gold)
                const cardClass = isPremium
                  ? "border-2 border-[#D4A843]/40 bg-[#050505]/70 backdrop-blur-[20px] backdrop-saturate-[120%]"
                  : isMid
                    ? "border border-[#D4A843]/30 bg-gradient-to-b from-[#111827] to-[#0c1220]"
                    : "border border-white/10 bg-[#0c1625]/80";

                const titleClass = isPremium ? "gold-shiny" : isMid ? "text-white" : "text-white";

                const btnClass = isPremium
                  ? "bg-[#D4A843] text-[#0a1628] hover:bg-[#e0b44f] shadow-[0_4px_20px_rgba(212,168,67,0.3)]"
                  : isMid
                    ? "border border-white/30 text-white hover:border-white/50 hover:bg-white/5 bg-transparent"
                    : "border border-white/20 text-white/80 hover:border-white/40 hover:text-white bg-transparent";

                const dividerClass = isPremium ? "bg-[#D4A843]/20" : isMid ? "bg-white/15" : "bg-white/8";
                const checkClass = isPremium ? "text-[#22c55e]" : isMid ? "text-[#22c55e]/80" : "text-[#22c55e]/70";

                return (
                  <div
                    key={ticket.name}
                    className={`rounded-2xl p-7 md:p-8 flex flex-col ${cardClass}`}
                  >
                    {/* Title */}
                    <h3
                      className={`font-black text-xl md:text-2xl uppercase leading-tight mb-6 whitespace-pre-line text-center ${titleClass}`}
                    >
                      {ticket.name}
                    </h3>

                    {/* Badge */}
                    <div className="mb-5">
                      <span className={`block w-full text-center text-xs font-bold tracking-wider py-2.5 rounded-lg ${isPremium
                        ? "bg-[#D4A843]/20 text-[#D4A843] border border-[#D4A843]/30"
                        : "bg-[#D4A843]/15 text-[#D4A843] border border-[#D4A843]/20"
                        }`}>
                        50% de desconto
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mb-1 text-center">
                      <span className="text-white/40 text-sm">Lote 1: </span>
                      <span className="font-black text-2xl md:text-[1.75rem] text-white">{ticket.price}</span>
                    </div>
                    <p className="text-white/25 text-xs text-center mb-6">{ticket.lote2}</p>

                    {/* CTA */}
                    <a
                      href="#"
                      className={`block w-full text-center font-bold text-sm tracking-wider py-3.5 rounded-lg mb-7 transition-all duration-300 ${btnClass}`}
                    >
                      COMPRAR PASSAPORTE
                    </a>

                    {/* Divider */}
                    <div className={`w-full h-px mb-6 ${dividerClass}`} />

                    {/* Items */}
                    <ul className="space-y-3 flex-1">
                      {ticket.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-white/65 text-[13px] leading-relaxed">
                          <span className={`shrink-0 mt-0.5 text-sm ${checkClass}`}>
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── INGRESSOS EM GRUPO ─── */}
        <section className="relative w-full min-h-0 md:min-h-screen bg-[#f5f5f7] flex flex-col items-center pt-16 md:pt-24 pb-16 md:pb-20 px-4 md:px-6">
          {/* Imagem (Caixa normal com margens laterais, sem transição) */}
          <div className="w-full max-w-[1400px] mx-auto h-[45vh] md:h-[55vh] z-0 overflow-hidden relative">
            <img
              src="/images/experiencia-dsc.webp"
              alt="Plateia do evento"
              className="w-full h-full object-cover origin-center"
            />
          </div>

          {/* Card Flutuante (Sobreposto com margem negativa) */}
          <div className="relative z-10 flex w-full max-w-[800px] mx-auto justify-center mt-[-15vh] md:mt-[-20vh]">
            <div className="bg-white rounded-3xl p-8 md:p-14 text-center w-full shadow-[0_15px_60px_rgba(0,0,0,0.12)] flex flex-col items-center">
              <p className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 text-gray-500">
                PACOTES PERSONALIZADOS
              </p>
              <h2 className="text-3xl md:text-[2.6rem] font-black text-gray-900 mb-6 tracking-tight leading-tight">
                Ingressos em Grupo
              </h2>
              <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-10 max-w-lg mx-auto font-medium">
                Vai reunir um grupo de 5 pessoas ou mais? Chame nosso time no WhatsApp para consultar
                valores e pacotes personalizados para vocês.
              </p>

              <div className="flex flex-col gap-4 w-full max-w-[480px]">
                <a
                  href="#"
                  className="bg-[#21a44e] hover:bg-[#1b8c42] transition-colors text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-[13px] md:text-[15px] border border-transparent shadow-sm"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  SOLICITAR PACOTE DE 5 PESSOAS OU MAIS
                </a>
                <a
                  href="#"
                  className="bg-[#21a44e] hover:bg-[#1b8c42] transition-colors text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-[13px] md:text-[15px] border border-transparent shadow-sm"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  TIRAR DÚVIDAS SOBRE O GIGANTES
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── MENTOR — ALTEMIR ROCHA ─── */}
        <section className="relative overflow-hidden bg-[#050505] min-h-[80vh]">
          {/* Luzes desfocadas no background preto */}
          <div className="absolute top-[15%] right-[5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#D4A843]/8 rounded-full blur-[120px] md:blur-[180px] pointer-events-none z-0" />
          <div className="absolute bottom-[20%] right-[30%] w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-[#0693e3]/10 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0" />
          <div className="absolute top-[60%] right-[10%] w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-[#D4A843]/6 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0" />

          <div className="flex flex-col md:flex-row items-stretch min-h-0 md:min-h-[80vh]">
            {/* Photo — flush left, sem padding, sem arredondamento */}
            <div className="md:w-[45%] lg:w-[42%] shrink-0 relative">
              <img
                src="/altemirDono"
                alt="Altemir Rocha"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "350px" }}
              />
              {/* Gradiente sutil na borda direita da foto para fundir com o preto */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-[#050505] to-transparent" />
            </div>

            {/* Bio — lado direito */}
            <div className="md:w-[55%] lg:w-[58%] flex flex-col justify-center px-6 md:px-14 lg:px-20 py-10 md:py-20 relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-black mb-10 leading-tight gold-shiny">
                Quem será o seu mentor?
              </h2>
              <div className="space-y-5 text-white/75 text-[15px] md:text-base leading-relaxed">
                <p>
                  Seu sucesso começou com a aplicação de tudo que ensina, e que o fez vender mais de{" "}
                  <strong className="text-white">R$ 2 BILHÕES</strong> no mercado imobiliário.
                </p>
                <p>
                  São mais de <strong className="text-white">20 mil corretores</strong> do Brasil treinados.
                </p>
                <p>
                  Já palestrou para mais de <strong className="text-white">55 mil pessoas</strong> país afora,
                  tornando-se o palestrante mais ovacionado em grandes palcos.
                </p>
                <p>
                  É considerado pelos seus alunos o maior gerador de corretores e imobiliárias de sucesso no
                  Brasil. Ele transforma corretores e donos de imobiliárias comuns, em profissionais de sucesso
                  e alta performance.
                </p>
                <p>
                  São mais de 5.000 alunos e diversos cases faturando alto através da sua metodologia, tem
                  em seu portfólio cases que em pouco tempo, fecharam mais de{" "}
                  <strong className="text-white">R$ 149 milhões</strong> em vendas.
                </p>
                <p>
                  <strong className="text-white">É também fundador do IBRACIV</strong> – Instituto Brasileiro de Aperfeiçoamento para Corretores,
                  Imobiliárias e Vendedores, um Instituto que tem como propósito elevar o nível de
                  conhecimento atrelado a prática, para que outros corretores e donos de imobiliária
                  experimentem uma vida gigante em abundância material e pessoal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── IBRACIV SECTION ─── */}
        <section className="ibraciv-section py-16 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <img
              src="/images/logo-ibraciv.svg"
              alt="IBRACIV"
              className="h-16 md:h-20 mx-auto mb-8"
            />
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center italic">
              Instituto Brasileiro de Aperfeiçoamento para Corretores, Imobiliárias e Vendedores –
              Uma escola completa e pronta para lhe ensinar, na prática, o que fazer para ter
              sucesso em todas as áreas da sua vida no mercado imobiliário, com o propósito de
              transformar pessoas, elevar o nível da profissão e levar prosperidade a todos que
              tem paixão por vencer.
            </p>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="site-footer py-8 px-6 text-center">
        <p className="text-white/30 text-sm">
          ©Copyright 2026 | Todos os direitos reservados
        </p>
      </footer>
    </div>
  )
}
