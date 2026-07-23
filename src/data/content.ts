/**
 * Conteúdo centralizado do site.
 */

export const siteConfig = {
  name: 'O Quarteto',
  fullName: 'O Quarteto de Segurança e Saúde do Trabalho',
  tagline: 'Conhecimento, prática e compromisso com a SST',
  url: 'https://oquarteto.com.br',
  locale: 'pt_BR',
  logo: '/images/logo4teto.svg',
  instagram: {
    url: 'https://www.instagram.com/oquartetosst/',
    handle: '@oquartetosst',
    label: 'Instagram',
  },
} as const

export const aboutContent = {
  title: 'Sobre o Quarteto',
  subtitle: 'Uma trajetória dedicada à Segurança e Saúde do Trabalho',
  paragraphs: [
    'O Quarteto de Segurança e Saúde do Trabalho reúne profissionais com trajetórias complementares em SST, unidos pelo compromisso de disseminar conhecimento técnico de forma clara, acessível e aplicável.',
    'Desde a sua formação, o grupo tem promovido debates qualificados sobre prevenção de riscos, gestão de SST e cultura de segurança nas organizações.',
    'Nossa missão é aproximar teoria e prática, criando espaços de troca entre especialistas, gestores e trabalhadores em favor de ambientes mais seguros e saudáveis.',
  ],
  image: {
    src: '/images/quarteto.webp',
    alt: 'Integrantes do Quarteto de Segurança e Saúde do Trabalho',
  },
} as const

export type Member = {
  id: string
  name: string
  role: string
  bio: string
  image: {
    src: string
    alt: string
  }
}

export const members: Member[] = [
  {
    id: 'integrante-1',
    name: 'Antonio Tadeu da Costa',
    role: 'Advogado · OAB/SP 175.112 · Especialista em SST e Direito do Trabalho',
    bio: 'Advogado (OAB/SP 175.112) com mais de quatro décadas de atuação em Segurança e Saúde do Trabalho e Direito do Trabalho. Foi docente e coordenador das áreas de SST e meio ambiente do SENAC de Presidente Prudente (SP) por 35 anos, professor universitário na UNOESTE e na TOLEDO e docente convidado da UNESP. Autor do livro "CIPA — Organização, Funcionamento e Atribuições", jurado do Prêmio Proteção Brasil e fundador do escritório ATC & PC Advocacia.',
    image: {
      src: '/images/antonio-tadeu-costa.webp',
      alt: 'Retrato de Antonio Tadeu da Costa, advogado e especialista em Segurança e Saúde do Trabalho',
    },
  },
  {
    id: 'integrante-2',
    name: 'Cláudio Pereira de Lima',
    role: 'Técnico em Segurança do Trabalho',
    bio: 'Educador físico, especialista em trânsito e técnico em Segurança do Trabalho. Atuou na Empresa de Transportes Andorinha S/A por 28 anos e no Frigorífico Bordon S/A por 5 anos. Foi instrutor de SST no SENAC e no SENAI e, atualmente, é instrutor no SEST SENAT de Presidente Prudente.',
    image: {
      src: '/images/claudio.webp',
      alt: 'Retrato de Cláudio Pereira de Lima, técnico em Segurança do Trabalho',
    },
  },
  {
    id: 'integrante-3',
    name: 'Francisley Ferreira Sanches',
    role: 'Técnico em Segurança do Trabalho · Especialista em Construção Civil',
    bio: 'Graduado em Administração e pós-graduado em Gestão de Negócios e Agronegócios, é técnico em Segurança do Trabalho com mais de 30 anos de experiência em diversos segmentos. Foi professor de SST no SENAC e no Colégio CRIARTE. Nas últimas duas décadas, atua como TST especialista e responsável do SENAI no convênio com o SindusCon na construção civil, na região do Oeste Paulista.',
    image: {
      src: '/images/francisley.webp',
      alt: 'Retrato de Francisley Ferreira Sanches, técnico em Segurança do Trabalho',
    },
  },
  {
    id: 'integrante-4',
    name: 'Wesley de Lima Gaspar',
    role: 'Técnico em Segurança do Trabalho',
    bio: 'Profissional com sólida experiência em Segurança, Saúde e Meio Ambiente desde 2000 e com foco em Segurança do Trabalho desde 2015. Iniciou como auxiliar de Enfermagem do Trabalho e tornou-se técnico em Segurança do Trabalho, com atuação no setor industrial e agroindustrial. Atualmente trabalha na Atvos. Formado em Segurança do Trabalho pelo SENAC e em Enfermagem do Trabalho, é membro do Quarteto de SST desde 2018.',
    image: {
      src: '/images/wesley.webp',
      alt: 'Retrato de Wesley de Lima Gaspar, técnico em Segurança do Trabalho',
    },
  },
]

export const eventPreview = {
  title: 'Encontro de SST',
  subtitle: 'O principal evento anual organizado pelo Quarteto',
  description:
    'O Encontro de SST reúne profissionais, palestrantes e experiências práticas em Presidente Prudente (SP). Em 2026, o Quarteto promove a 7ª edição, no dia 25 de julho, com foco em atualização técnica, networking e prevenção.',
  ctaLabel: 'Conheça o evento',
  ctaPath: '/encontro-sst',
  image: {
    src: '/images/SST.webp',
    alt: 'Arte oficial do Encontro de Segurança e Saúde do Trabalho',
  },
} as const

export const eventPageContent = {
  title: 'Encontro de SST',
  subtitle: '7ª edição em Presidente Prudente — 25 de julho de 2026',
  purpose: {
    title: 'Sobre o evento',
    paragraphs: [
      'O Quarteto de SST (Segurança e Saúde do Trabalho) é formado por Antonio Tadeu da Costa, Cláudio Pereira de Lima, Francisley Ferreira Sanches e Wesley de Lima Gaspar.',
      'Criado em 2018, o grupo tem como um de seus objetivos realizar encontros de SST em Presidente Prudente, no estado de São Paulo, reunindo profissionais e instituições em torno da prevenção.',
    ],
  },
  highlights: [
    {
      title: 'Palestras e painéis',
      text: 'Acompanhe debates com especialistas sobre atualizações das NRs, cultura de segurança, saúde mental e inovações na prevenção de acidentes.',
    },
    {
      title: 'Networking qualificado',
      text: 'Conecte-se com técnicos, engenheiros, médicos do trabalho e gestores para trocar experiências e fortalecer parcerias profissionais.',
    },
    {
      title: 'Conteúdo aplicável',
      text: 'Leve estudos de caso e ferramentas práticas para aplicar na gestão de riscos e na melhoria da qualidade de vida no trabalho.',
    },
  ],
  gallery: [
    {
      src: '/images/img1-painel_de_exposicao.webp',
      alt: 'Painel de exposição em edição anterior do Encontro de SST',
    },
    {
      src: '/images/img2-palestra_interativa_com_o_publico_sobre_equipamento_deteccao_de_gas.webp',
      alt: 'Palestra interativa sobre equipamento de detecção de gás',
    },
    {
      src: '/images/img3-homenageados_e_palestrantes_do_6_encontro.webp',
      alt: 'Homenageados e palestrantes do 6º Encontro de SST',
    },
    {
      src: '/images/img4-palestra_do_5_encontro.webp',
      alt: 'Palestra realizada no 5º Encontro de SST',
    },
    {
      src: '/images/img5-participantes_do_segundo_encontro.webp',
      alt: 'Participantes do 2º Encontro de SST',
    },
  ],
  showVideos: false,
  videos: [
    {
      title: 'Vídeo institucional do evento',
      description: 'Conteúdo em vídeo institucional será publicado em breve.',
      embedUrl: '',
      thumbnail: '/images/SST.webp',
    },
    {
      title: 'Depoimentos de participantes',
      description: 'Depoimentos de edições anteriores serão disponibilizados em breve.',
      embedUrl: '',
      thumbnail: '/images/SST.webp',
    },
  ],
  additionalText: {
    title: 'Informações do evento',
    highlight: {
      edition: '7º ESST',
      editionFull: '7º Encontro de Segurança e Saúde do Trabalho',
      date: '25/07/2026',
      day: 'Sábado',
      time: 'Das 07h30 às 13h30',
      workload: '6 horas de carga horária',
      context:
        'A data celebra o 54º aniversário do SESMT (Serviço Especializado em Segurança e em Medicina do Trabalho) e o DNPAT (Dia Nacional da Prevenção de Acidentes do Trabalho), cuja data oficial é 27/07/2026.',
    },
    details: [
      {
        label: 'Local',
        value: 'Salão de festas Limoeiro, Campus II da UNOESTE',
      },
      {
        label: 'Endereço',
        value:
          'Rodovia Raposo Tavares, Km 572, bairro Limoeiro, CEP 19.067-175 — Presidente Prudente (SP), Brasil',
      },
    ],
    registration: {
      label: 'Saiba mais',
      url: 'https://www.even3.com.br/setimoesst-734040/',
    },
  },
} as const

export const navigation = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Integrantes', href: '/#integrantes' },
  { label: 'Encontro de SST', href: '/encontro-sst' },
] as const
