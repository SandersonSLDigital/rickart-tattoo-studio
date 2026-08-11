# Rick'Art Tattoo Studio — site institucional bilíngue

**Data:** 2026-08-11
**Status:** Aprovado para planejamento de implementação

## Contexto

O Rick'Art Tattoo Studio (Deerfield Beach, FL) é um estúdio privado do tatuador
Rick, com 12 anos de profissão, especializado em Realismo Black & Grey,
Minimalismo/Fine Line e Old School. Todo atendimento é fechado por hora
marcada, exclusivamente via DM do Instagram
([@rickarttattoo_fl](https://www.instagram.com/rickarttattoo_fl/)) — não há
formulário, telefone público nem agenda online.

O acervo disponível no projeto:

- 1 logo (selo circular preto e branco, caveira + máquinas cruzadas)
- 13 fotos de portfólio em alta resolução (`imagens/1.png`–`13.png`)
- ~40 desenhos de flash em `imagens/CatálogoFlash/`
- ~45 fotos de WhatsApp, majoritariamente em baixa resolução — **não** entram
  no portfólio inicial (ver Decisões)
- Texto de bio do Rick e endereço do estúdio, em português

Sites de referência indicados: brazilianinktattoo.com, basetattoo.com.br.

## Objetivo

Um site institucional bilíngue (PT/EN) que apresente o trabalho do Rick como
arte de alto padrão e direcione todo visitante interessado para a DM do
Instagram — sem formulário ou agenda concorrendo com esse fluxo.

## Decisões de escopo

- **Sem preços no site.** A bio não fala valores; orçamento é caso a caso. O
  FAQ explica que o preço depende de tamanho/estilo/tempo e convida para a DM.
- **Sem formulário de contato nem agenda online.** Único canal de conversão:
  DM do Instagram.
- **Portfólio inicial usa só as 13 fotos em alta resolução.** As ~45 fotos de
  WhatsApp (30–80 KB, muitas em baixa qualidade) ficam de fora de galerias em
  tela cheia por ficarem embaçadas ampliadas. O catálogo de flash usa as ~40
  imagens de `CatálogoFlash/`. Fotos de estúdio em boa resolução entram depois
  quando o Rick as enviar.
- **Sem foto do Rick no lançamento.** A pasta reservada para isso
  (`imagens/imagentatuadorHero/`) só contém um `.txt`. O hero e a seção
  "Quem é o Rick" usam fotos de tatuagem; o espaço para retrato fica pronto
  para receber a foto depois, sem bloquear o lançamento.
- **Domínio:** publicação inicial em endereço gratuito da Vercel
  (`rickarttattoo.vercel.app`), pronto para apontar um domínio próprio depois.

## Direção visual (validada com mockups no companion)

**Estilo A — Escuro e cinematográfico**, escolhido entre 3 opções:
preto absoluto como base, fotos de tatuagem em tela cheia, tipografia
condensada e pesada nos títulos, mínimo de cor além da imagem. As fotos black
& grey do portfólio são o elemento visual central.

## Mapa do site

Todas as páginas existem em duas rotas, PT e EN. `frontend-design` (skill) é
a referência a seguir na implementação visual.

| Página | `/pt/` | `/en/` |
|---|---|---|
| Home | `/pt/` | `/en/` |
| Portfólio | `/pt/portfolio` | `/en/portfolio` |
| Flash | `/pt/flash` | `/en/flash` |
| Sobre | `/pt/sobre` | `/en/about` |
| Cuidados e Dúvidas (FAQ) | `/pt/cuidados` | `/en/aftercare` |
| Contato | `/pt/contato` | `/en/contact` |

Acesso à raiz `/` detecta idioma do navegador e redireciona para `/pt/` ou
`/en/`; idioma não reconhecido cai em `/pt/`. Troca de idioma sempre visível
no header e no rodapé.

## Home — seções em ordem de rolagem

1. **Hero** — foto de tatuagem em tela cheia sobre preto, título curto,
   "Deerfield Beach · Flórida", botão "Agendar na DM".
2. **Quem é o Rick** — resumo da bio (12 anos de profissão, missão de
   transformar histórias em arte), link para a página Sobre.
3. **Os três estilos** — um bloco por estilo (Realismo B&G, Fine Line, Old
   School) com foto representativa, levando ao portfólio já filtrado por
   aquele estilo.
4. **Trabalhos em destaque** — layout editorial (peça grande + peças de
   apoio, com legenda de estilo), 6 peças curadas + botão para o portfólio
   completo.
5. **Flash disponíveis** — faixa horizontal com 6–8 desenhos, levando ao
   catálogo de flash.
6. **O estúdio** — privado, fácil acesso, biossegurança rigorosa, somente
   com hora marcada.
7. **Onde estamos** — endereço completo, mapa embutido do Google, CTA final
   de Instagram.
8. **Rodapé** — logo, Instagram, endereço, troca de idioma.

## Página de Portfólio

Layout **editorial**: peças com curadoria manual (campo `destaque` e `ordem`
nos dados) ganham espaço grande; as demais aparecem em apoio, todas com
legenda de estilo. Filtro por estilo no topo (Todos / Realismo / Fine Line /
Old School). Clique abre a foto em lightbox (tela cheia, navegável).

## Página de Flash

Grade do catálogo (~40 peças de `CatálogoFlash/`), mesmo padrão de lightbox
do portfólio. Cada peça tem um sinalizador simples de disponibilidade.

## Header

Fixo durante toda a rolagem. Sobre o hero é transparente; a partir de ~80px de
rolagem, ganha fundo translúcido com desfoque (efeito vidro fosco) e uma linha
fina de separação — transição feita só com opacidade/blur, sem reflow.

## Botão de DM

Flutuante, acompanha a rolagem em todas as páginas (discreto no canto no
desktop; barra fixa inferior no celular). Aparece com fade após o primeiro
scroll, para não competir com o hero. Aponta sempre para
`instagram.com/rickarttattoo_fl`.

## Animações

CSS-first, sem biblioteca externa (nada de Framer Motion/GSAP):

- **Entrada ao rolar:** fade + deslocamento vertical leve (~16px) via
  `IntersectionObserver` mínimo (~1 KB de JS) quando a seção entra na tela.
- **Header:** transição de opacidade/blur ao passar os primeiros ~80px de
  rolagem.
- **Lightbox:** fade + leve zoom ao abrir/fechar.
- **Botão de DM:** fade-in após o primeiro scroll.
- **Hover em fotos/cards:** zoom leve (~1.03x) + realce de legenda.
- Todas as animações respeitam `prefers-reduced-motion` (desativadas por
  completo quando o sistema pede).

## Arquitetura técnica

**Stack:** Astro, deploy na Vercel.

```
src/
  content/
    trabalhos/     # 1 arquivo por tatuagem: estilo, legenda PT/EN, destaque, ordem
    flash/         # 1 arquivo por desenho: disponibilidade, tamanho sugerido
  i18n/
    pt.json  en.json   # todo texto do site
    ui.ts               # função t() que resolve idioma pela rota
  layouts/
    Base.astro      # <head>, SEO, header, footer, botão flutuante de DM
  components/
    Header.astro  Footer.astro  DmButton.astro
    HeroFullBleed.astro  BioBlock.astro  StyleCard.astro
    EditorialGrid.astro  Lightbox.astro  FlashGrid.astro  FaqAccordion.astro
  pages/
    pt/  en/        # as 6 páginas de cada língua, montando os componentes
public/imagens/      # originais
```

Regras de arquitetura:

- **Componente não sabe idioma.** Recebe texto pronto por propriedade — evita
  vazamento de PT em página EN (ou vice-versa).
- **Foto é conteúdo, não código.** Trabalho novo = arquivo na pasta + poucas
  linhas de dados (estilo, legenda PT/EN, destaque, ordem). Nenhum HTML é
  tocado ao adicionar peça.
- **Imagem otimizada no build.** Astro gera AVIF/WebP em múltiplos tamanhos;
  celular baixa ~60–80 KB por imagem em vez do 1,5 MB original. Arquivos
  originais permanecem intactos no repositório.
- **JavaScript mínimo e sob demanda.** Páginas saem como HTML puro; só
  lightbox, filtro de estilo, menu mobile e o observer de animação carregam
  script, e só quando entram em uso.

## Tratamento de casos

- Imagem que falha ao carregar mantém o espaço reservado (evita layout
  pulando) e não quebra a grade.
- Filtro de estilo sem nenhum resultado mostra mensagem simples em vez de
  grade vazia.
- Raiz `/` sem idioma reconhecido cai em `/pt/`.

## Verificação antes de considerar pronto

- Visitar as 12 páginas (6 × 2 línguas) localmente e confirmar que nenhum
  texto vazou para a língua errada.
- Testar em viewport de celular (390px) e desktop.
- Confirmar que o botão de DM abre `instagram.com/rickarttattoo_fl` em todas
  as páginas.
- Rodar `astro build` e confirmar que a otimização de imagem completa sem
  erro antes do deploy na Vercel.

## Fora de escopo (por ora)

- Formulário de contato, agenda online, exibição de preços.
- Depoimentos/avaliações e feed do Instagram embutido (não solicitados).
- Fotos de estúdio e retrato do Rick (aguardando envio do cliente).
- Domínio próprio (publicação inicial em `*.vercel.app`).
