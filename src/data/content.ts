/**
 * Conteúdo centralizado do site.
 * Substitua os textos e imagens temporários pelos definitivos quando disponíveis.
 */

export const siteConfig = {
  name: 'O Quarteto de Saúde e Segurança do Trabalho',
  fullName: 'O Quarteto de Saúde e Segurança do Trabalho',
  tagline: 'Conhecimento, prática e compromisso com a SST',
  url: 'https://oquarteto.com.br',
  locale: 'pt_BR',
  email: 'contato@oquarteto.com.br',
} as const

export const aboutContent = {
  title: 'Sobre o Quarteto',
  subtitle: 'Uma trajetória dedicada à Saúde e Segurança do Trabalho',
  paragraphs: [
    'O Quarteto de Saúde e Segurança do Trabalho nasceu da união de profissionais com trajetórias complementares em SST, comprometidos em disseminar conhecimento técnico de forma acessível e aplicável.',
    'Ao longo dos anos, o grupo consolidou-se como referência em debates qualificados sobre prevenção de riscos, ergonomia, gestão de SST e cultura de segurança nas organizações.',
    'Nossa missão é conectar teoria e prática, promovendo espaços de troca entre especialistas, gestores e trabalhadores interessados em ambientes mais seguros e saudáveis.',
  ],
  image: {
    src: '/images/quarteto.webp',
    alt: 'Equipe do Quarteto de Saúde e Segurança do Trabalho em reunião',
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
    bio: 'Advogado (OAB/SP 175.112) com mais de quatro décadas de atuação em Saúde e Segurança do Trabalho e Direito do Trabalho. Foi docente e coordenador das áreas de SST e meio ambiente do SENAC de Presidente Prudente (SP) por 35 anos, professor universitário na UNOESTE e na TOLEDO e docente convidado da UNESP. Autor do livro "CIPA — Organização, Funcionamento e Atribuições", jurado do Prêmio Proteção Brasil e fundador do escritório ATC & PC Advocacia.',
    image: {
      src: '/images/antonio-tadeu-costa.webp',
      alt: 'Antonio Tadeu da Costa — advogado e especialista em Saúde e Segurança do Trabalho',
    },
  },
  {
    id: 'integrante-2',
    name: 'Cláudio Pereira de Lima',
    role: 'Técnico em Segurança do Trabalho',
    bio: 'Educador Físico , Especialista em Trânsito, Técnico em Segurança do Trabalho. Trabalhou em várias empresas como Empresa de Transportes Andorinha S/A (28 anos), Frigorífico Bordon S/A (5 anos). Foi instrutor em SST do Senac, do Senai e hoje é instrutor no Sest Senat unidade de Presidente Prudente.',
    image: {
      src: '/images/claudio.webp',
      alt: 'Foto do integrante 3 — substituir por imagem definitiva',
    },
  },
  {
    id: 'integrante-3',
    name: 'Cláudio Pereira de Lima',
    role: 'Técnico em Segurança do Trabalho',
    bio: 'Educador Físico , Especialista em Trânsito, Técnico em Segurança do Trabalho. Trabalhou em várias empresas como Empresa de Transportes Andorinha S/A (28 anos), Frigorífico Bordon S/A (5 anos). Foi instrutor em SST do Senac, do Senai e hoje é instrutor no Sest Senat unidade de Presidente Prudente.',
    image: {
      src: '/images/francisley.webp',
      alt: 'Foto do integrante 3 — substituir por imagem definitiva',
    },
  },
  {
    id: 'integrante-4',
    name: 'Wesley de Lima Gaspar',
    role: 'Técnico em Segurança do Trabalho',
    bio: 'Profissional com sólida experiência em Saúde, Segurança e Meio Ambiente desde 2000, com foco em Segurança do Trabalho desde 2015. Iniciou como Auxiliar de Enfermagem do Trabalho e evoluiu para Técnico em Segurança do Trabalho, atuando em empresas do setor industrial e agroindustrial e, atualmente, na Atvos. Formado em Segurança do Trabalho pelo SENAC e em Enfermagem do Trabalho, é membro do Quarteto de SST desde 2018.',
    image: {
      src: '/images/wesley.webp',
      alt: 'Wesley de Lima Gaspar — técnico em Segurança do Trabalho',
    },
  },
]

export const eventPreview = {
  title: 'Encontro de SST',
  subtitle: 'O principal evento anual organizado pelo Quarteto',
  description:
    'Uma edição por ano reunindo palestrantes, cases práticos e networking para profissionais e empresas que levam a SST a sério. Substitua este texto pela descrição oficial do evento.',
  ctaLabel: 'Conheça o evento',
  ctaPath: '/encontro-sst',
  image: {
    src: '/images/event-preview.svg',
    alt: 'Participantes do Encontro de SST em auditório',
  },
} as const

export const eventPageContent = {
  title: 'Encontro de SST',
  subtitle: 'Propósito, história e experiências do evento',
  purpose: {
    title: 'Por que criamos o Encontro',
    paragraphs: [
      'Texto temporário sobre o intuito da criação do Encontro de SST: reunir a comunidade, fomentar debates técnicos e compartilhar soluções reais para os desafios da Saúde e Segurança do Trabalho.',
      'Este espaço será preenchido com o conteúdo oficial que você fornecer posteriormente, incluindo contexto histórico, objetivos e público-alvo do evento.',
    ],
  },
  highlights: [
    {
      title: 'Palestras e painéis',
      text: 'Espaço reservado para descrever as principais programações, temas abordados e convidados.',
    },
    {
      title: 'Networking qualificado',
      text: 'Texto temporário sobre oportunidades de conexão entre profissionais, empresas e instituições.',
    },
    {
      title: 'Conteúdo aplicável',
      text: 'Texto temporário sobre cases, workshops e materiais que os participantes levam para o dia a dia.',
    },
  ],
  gallery: [
    {
      src: '/images/event-gallery-1.svg',
      alt: 'Momento de palestra no Encontro de SST — imagem temporária',
      caption: 'Legenda temporária — edição anterior do evento',
    },
    {
      src: '/images/event-gallery-2.svg',
      alt: 'Participantes em networking no Encontro de SST — imagem temporária',
      caption: 'Legenda temporária — interação entre participantes',
    },
    {
      src: '/images/event-gallery-3.svg',
      alt: 'Painel de discussão no Encontro de SST — imagem temporária',
      caption: 'Legenda temporária — painel com especialistas',
    },
  ],
  videos: [
    {
      title: 'Vídeo institucional do evento',
      description: 'Substitua pela URL do YouTube ou Vimeo quando disponível.',
      embedUrl: '',
      thumbnail: '/images/video-placeholder.svg',
    },
    {
      title: 'Depoimentos de participantes',
      description: 'Espaço reservado para vídeo com relatos de edições anteriores.',
      embedUrl: '',
      thumbnail: '/images/video-placeholder.svg',
    },
  ],
  additionalText: {
    title: 'Informações adicionais',
    paragraphs: [
      'Seção para datas, local, inscrições, patrocínios ou outras informações que serão adicionadas futuramente.',
      'Mantenha os textos objetivos e escaneáveis para facilitar a leitura em dispositivos móveis e melhorar o SEO.',
    ],
  },
} as const

export const navigation = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Integrantes', href: '/#integrantes' },
  { label: 'Encontro de SST', href: '/encontro-sst' },
] as const
