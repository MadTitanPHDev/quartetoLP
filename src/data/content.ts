/**
 * Conteúdo centralizado do site.
 * Substitua os textos e imagens temporários pelos definitivos quando disponíveis.
 */

export const siteConfig = {
  name: 'O Quarteto',
  fullName: 'O Quarteto de Segurança e Saúde do Trabalho',
  tagline: 'Conhecimento, prática e compromisso com a SST',
  url: 'https://oquarteto.com.br',
  locale: 'pt_BR',
  email: 'contato@oquarteto.com.br',
  logo: '/images/logo4teto.svg',
} as const

export const aboutContent = {
  title: 'Sobre o Quarteto',
  subtitle: 'Uma trajetória dedicada à Segurança e Saúde do Trabalho',
  paragraphs: [
    'O Quarteto de Segurança e Saúde do Trabalho nasceu da união de profissionais com trajetórias complementares em SST, comprometidos em disseminar conhecimento técnico de forma acessível e aplicável.',
    'Ao longo dos anos, o grupo consolidou-se como referência em debates qualificados sobre prevenção de riscos, ergonomia, gestão de SST e cultura de segurança nas organizações.',
    'Nossa missão é conectar teoria e prática, promovendo espaços de troca entre especialistas, gestores e trabalhadores interessados em ambientes mais seguros e saudáveis.',
  ],
  image: {
    src: '/images/quarteto.webp',
    alt: 'Equipe do Quarteto de Segurança e Saúde do Trabalho em reunião',
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
      alt: 'Antonio Tadeu da Costa — advogado e especialista em Segurança e Saúde do Trabalho',
    },
  },
  {
    id: 'integrante-2',
    name: 'Cláudio Pereira de Lima',
    role: 'Técnico em Segurança do Trabalho',
    bio: 'Educador Físico , Especialista em Trânsito, Técnico em Segurança do Trabalho. Trabalhou em várias empresas como Empresa de Transportes Andorinha S/A (28 anos), Frigorífico Bordon S/A (5 anos). Foi instrutor em SST do Senac, do Senai e hoje é instrutor no Sest Senat unidade de Presidente Prudente.',
    image: {
      src: '/images/claudio.webp',
      alt: 'Cláudio Pereira de Lima — técnico em Segurança do Trabalho',
    },
  },
  {
    id: 'integrante-3',
    name: 'Francisley Ferreira Sanches',
    role: 'Técnico em Segurança do Trabalho · Especialista em Construção Civil',
    bio: 'Graduado em Administração e pós-graduado em Gestão de Negócios e Agronegócios, é Técnico em Segurança do Trabalho com mais de 30 anos de trajetória em diversos segmentos. Foi professor de SST no SENAC e no Colégio CRIARTE e, nas últimas duas décadas, atua como TST especialista e responsável do SENAI no convênio com o SindusCon na construção civil, desenvolvendo suas atividades na região do Oeste Paulista.',
    image: {
      src: '/images/francisley.webp',
      alt: 'Francisley Ferreira Sanches — técnico em Segurança do Trabalho',
    },
  },
  {
    id: 'integrante-4',
    name: 'Wesley de Lima Gaspar',
    role: 'Técnico em Segurança do Trabalho',
    bio: 'Profissional com sólida experiência em Segurança, Saúde e Meio Ambiente desde 2000, com foco em Segurança do Trabalho desde 2015. Iniciou como Auxiliar de Enfermagem do Trabalho e evoluiu para Técnico em Segurança do Trabalho, atuando em empresas do setor industrial e agroindustrial e, atualmente, na Atvos. Formado em Segurança do Trabalho pelo SENAC e em Enfermagem do Trabalho, é membro do Quarteto de SST desde 2018.',
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
  subtitle: '7ª edição em Presidente Prudente — 25 de julho de 2026',
  purpose: {
    title: 'Sobre o evento',
    paragraphs: [
      'O Quarteto de SST (Segurança e Saúde do Trabalho) é um grupo formado por profissionais da área, tendo como integrantes Antonio Tadeu da Costa, Cláudio Pereira de Lima, Francisley Ferreira Sanches e Wesley de Lima Gaspar.',
      'O grupo surgiu no ano de 2018, tendo como um dos seus objetivos realizar encontros na área de SST na cidade de Presidente Prudente, no estado de São Paulo.',
      
    ],
  },
  highlights: [
    {
      title: 'Palestras e painéis',
      text: 'Atualize-se com grandes especialistas do setor de SST. Acompanhe debates profundos sobre atualizações das NRs, cultura de segurança, saúde mental e inovações tecnológicas na prevenção de acidentes.',
    },
    {
      title: 'Networking qualificado',
      text: 'Amplie sua rede de contatos profissionais. Conecte-se com engenheiros, técnicos, médicos do trabalho e gestores para trocar experiências, discutir desafios do setor e criar parcerias estratégicas.',
    },
    {
      title: 'Conteúdo aplicável',
      text: 'Vá além da teoria. Tenha acesso a estudos de caso reais e ferramentas práticas que você poderá implementar imediatamente para melhorar a gestão de riscos e a qualidade de vida na sua empresa.',
    },
  ],
  gallery: [
    {
      src: '/images/img1-painel de exposição.webp',
      alt: 'Painel de exposição',
    },
    {
      src: '/images/img2-palestra interariva com o publico sobre equipamento deteccao de gas.webp',
      alt: 'Palestra interativa com o público sobre equipamento de detecção de gás',
    },
    {
      src: '/images/img3-homenageados e palestrantes do 6 encontro.webp',
      alt: 'Homenageados e palestrantes do 6º encontro',
    },
    {
      src: '/images/img4-palestra do 5 encontro.webp',
      alt: 'Palestra do 5º encontro',
    },
    {
      src: '/images/img5-participantes do segundo encontro.webp',
      alt: 'Participantes do segundo encontro',
    },
  ],
  showVideos: false,
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
    highlight: {
      edition: '7º ESST',
      editionFull: '7º Encontro de Segurança e Saúde do Trabalho',
      date: '25/07/2026',
      day: 'Sábado',
      time: 'Das 07h30 às 13h30',
      workload: '6 horas de carga horária',
      context:
        'O Quarteto organiza esta edição em data especial: comemoração ao 54º aniversário do SESMT (Serviço Especializado em Segurança e em Medicina do Trabalho) e ao DNPAT (Dia Nacional da Prevenção de Acidentes do Trabalho), cuja data oficial é 27/07/2026 (segunda-feira).',
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
      label: 'Garanta sua vaga',
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
