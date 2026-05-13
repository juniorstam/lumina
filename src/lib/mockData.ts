export interface Course {
  id: string
  title: string
  platform: Platform
  status: 'completed' | 'in-progress' | 'not-started' | 'subscription'
  progress: number
  price: number
  currency: string
  purchaseDate: string
  lastAccessed?: string
  instructor: string
  category: string
  duration: string
  thumbnail?: string
  certificateEarned: boolean
}

export interface Certificate {
  id: string
  courseTitle: string
  platform: Platform
  issueDate: string
  expiryDate?: string
  credentialId: string
  status: 'active' | 'pending' | 'expired'
  skills: string[]
  instructor: string
}

export interface PlatformConnection {
  id: string
  name: Platform
  email: string
  connectedAt: string
  status: 'active' | 'syncing' | 'error'
  coursesFound: number
  lastSync: string
}

export interface UserProfile {
  id: string
  name: string
  email: string
  username: string
  avatar?: string
  headline: string
  location: string
  bio: string
  skills: string[]
  joinedAt: string
  totalInvested: number
  totalCourses: number
  totalCertificates: number
  activeSubscriptions: number
}

export interface AIInsight {
  id: string
  type: 'warning' | 'suggestion' | 'achievement' | 'info'
  message: string
  action?: string
  actionLabel?: string
  timestamp: string
}

export interface VaultEntry {
  id: string
  platform: Platform
  email: string
  lastUsed: string
  status: 'active' | 'inactive' | 'expired'
  notes?: string
}

export type Platform =
  | 'Udemy'
  | 'Coursera'
  | 'Hotmart'
  | 'Rocketseat'
  | 'LinkedIn Learning'
  | 'Skillshare'
  | 'Kiwify'
  | 'edX'
  | 'Alura'

export const PLATFORM_STYLES: Record<Platform, { badge: string; dot: string }> = {
  'Udemy': {
    badge: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    dot: 'bg-orange-400',
  },
  'Coursera': {
    badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    dot: 'bg-blue-400',
  },
  'Hotmart': {
    badge: 'bg-red-500/10 text-red-400 border border-red-500/20',
    dot: 'bg-red-400',
  },
  'Rocketseat': {
    badge: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    dot: 'bg-purple-400',
  },
  'LinkedIn Learning': {
    badge: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    dot: 'bg-sky-400',
  },
  'Skillshare': {
    badge: 'bg-green-500/10 text-green-400 border border-green-500/20',
    dot: 'bg-green-400',
  },
  'Kiwify': {
    badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    dot: 'bg-emerald-400',
  },
  'edX': {
    badge: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    dot: 'bg-rose-400',
  },
  'Alura': {
    badge: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
    dot: 'bg-cyan-400',
  },
}

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'The Complete JavaScript Course 2024',
    platform: 'Udemy',
    status: 'completed',
    progress: 100,
    price: 29.99,
    currency: 'USD',
    purchaseDate: '2023-03-15',
    lastAccessed: '2023-09-20',
    instructor: 'Jonas Schmedtmann',
    category: 'Desenvolvimento Web',
    duration: '69h',
    certificateEarned: true,
  },
  {
    id: '2',
    title: 'Machine Learning Specialization',
    platform: 'Coursera',
    status: 'in-progress',
    progress: 43,
    price: 49.00,
    currency: 'USD',
    purchaseDate: '2024-01-10',
    lastAccessed: '2024-02-28',
    instructor: 'Andrew Ng',
    category: 'IA e Machine Learning',
    duration: '97h',
    certificateEarned: false,
  },
  {
    id: '3',
    title: 'Ignite — React Native',
    platform: 'Rocketseat',
    status: 'in-progress',
    progress: 67,
    price: 197.00,
    currency: 'BRL',
    purchaseDate: '2023-08-01',
    lastAccessed: '2024-03-10',
    instructor: 'Rodrigo Gonçalves',
    category: 'Desenvolvimento Mobile',
    duration: '40h',
    certificateEarned: false,
  },
  {
    id: '4',
    title: 'UX Design Professional Certificate',
    platform: 'Coursera',
    status: 'completed',
    progress: 100,
    price: 49.00,
    currency: 'USD',
    purchaseDate: '2022-11-05',
    lastAccessed: '2023-04-15',
    instructor: 'Google UX Team',
    category: 'Design',
    duration: '210h',
    certificateEarned: true,
  },
  {
    id: '5',
    title: 'Python for Data Science and AI',
    platform: 'edX',
    status: 'not-started',
    progress: 0,
    price: 199.00,
    currency: 'USD',
    purchaseDate: '2023-12-20',
    instructor: 'IBM Skills Network',
    category: 'Ciência de Dados',
    duration: '36h',
    certificateEarned: false,
  },
  {
    id: '6',
    title: 'Fórmula de Lançamento',
    platform: 'Hotmart',
    status: 'completed',
    progress: 100,
    price: 997.00,
    currency: 'BRL',
    purchaseDate: '2022-06-15',
    lastAccessed: '2022-12-01',
    instructor: 'Érico Rocha',
    category: 'Marketing',
    duration: '32h',
    certificateEarned: true,
  },
  {
    id: '7',
    title: 'AWS Solutions Architect Associate',
    platform: 'Udemy',
    status: 'in-progress',
    progress: 28,
    price: 24.99,
    currency: 'USD',
    purchaseDate: '2024-02-01',
    lastAccessed: '2024-02-15',
    instructor: 'Stephane Maarek',
    category: 'Computação em Nuvem',
    duration: '44h',
    certificateEarned: false,
  },
  {
    id: '8',
    title: 'LinkedIn Learning — Project Management',
    platform: 'LinkedIn Learning',
    status: 'subscription',
    progress: 55,
    price: 39.99,
    currency: 'USD',
    purchaseDate: '2024-01-01',
    lastAccessed: '2024-03-01',
    instructor: 'Various Instructors',
    category: 'Negócios',
    duration: '18h',
    certificateEarned: false,
  },
  {
    id: '9',
    title: 'iOS & Swift Bootcamp',
    platform: 'Udemy',
    status: 'not-started',
    progress: 0,
    price: 19.99,
    currency: 'USD',
    purchaseDate: '2023-07-04',
    instructor: 'Angela Yu',
    category: 'Desenvolvimento Mobile',
    duration: '55h',
    certificateEarned: false,
  },
  {
    id: '10',
    title: 'Design Systems with Figma',
    platform: 'Skillshare',
    status: 'subscription',
    progress: 80,
    price: 0,
    currency: 'USD',
    purchaseDate: '2024-01-15',
    lastAccessed: '2024-03-05',
    instructor: 'Pablo Stanley',
    category: 'Design',
    duration: '8h',
    certificateEarned: false,
  },
  {
    id: '11',
    title: 'Deep Learning with TensorFlow',
    platform: 'Coursera',
    status: 'not-started',
    progress: 0,
    price: 49.00,
    currency: 'USD',
    purchaseDate: '2023-10-01',
    instructor: 'Laurence Moroney',
    category: 'IA e Machine Learning',
    duration: '52h',
    certificateEarned: false,
  },
  {
    id: '12',
    title: 'NLW — Node.js Avançado',
    platform: 'Rocketseat',
    status: 'completed',
    progress: 100,
    price: 0,
    currency: 'BRL',
    purchaseDate: '2023-10-12',
    lastAccessed: '2023-10-18',
    instructor: 'Diego Fernandes',
    category: 'Backend',
    duration: '12h',
    certificateEarned: true,
  },
  {
    id: '13',
    title: 'Estratégias de Vendas Digitais',
    platform: 'Kiwify',
    status: 'in-progress',
    progress: 35,
    price: 497.00,
    currency: 'BRL',
    purchaseDate: '2024-01-20',
    lastAccessed: '2024-02-10',
    instructor: 'Pedro Sobral',
    category: 'Marketing',
    duration: '24h',
    certificateEarned: false,
  },
  {
    id: '14',
    title: 'React — The Complete Guide',
    platform: 'Udemy',
    status: 'completed',
    progress: 100,
    price: 29.99,
    currency: 'USD',
    purchaseDate: '2022-09-10',
    lastAccessed: '2023-01-20',
    instructor: 'Maximilian Schwarzmüller',
    category: 'Desenvolvimento Web',
    duration: '68h',
    certificateEarned: true,
  },
  {
    id: '15',
    title: 'Formação Python',
    platform: 'Alura',
    status: 'subscription',
    progress: 60,
    price: 89.90,
    currency: 'BRL',
    purchaseDate: '2024-01-01',
    lastAccessed: '2024-03-08',
    instructor: 'Guilherme Lima',
    category: 'Ciência de Dados',
    duration: '80h',
    certificateEarned: false,
  },
  {
    id: '16',
    title: 'Blockchain & Web3 Fundamentals',
    platform: 'edX',
    status: 'not-started',
    progress: 0,
    price: 150.00,
    currency: 'USD',
    purchaseDate: '2023-11-01',
    instructor: 'UC Berkeley',
    category: 'Web3',
    duration: '30h',
    certificateEarned: false,
  },
  {
    id: '17',
    title: 'Kubernetes for Developers',
    platform: 'LinkedIn Learning',
    status: 'not-started',
    progress: 0,
    price: 39.99,
    currency: 'USD',
    purchaseDate: '2023-09-15',
    instructor: 'Nana Janashia',
    category: 'DevOps',
    duration: '22h',
    certificateEarned: false,
  },
  {
    id: '18',
    title: 'Masterclass: Product Management',
    platform: 'Hotmart',
    status: 'not-started',
    progress: 0,
    price: 797.00,
    currency: 'BRL',
    purchaseDate: '2023-05-20',
    instructor: 'Marty Cagan',
    category: 'Product',
    duration: '28h',
    certificateEarned: false,
  },
  {
    id: '19',
    title: 'Advanced CSS and Sass',
    platform: 'Udemy',
    status: 'completed',
    progress: 100,
    price: 24.99,
    currency: 'USD',
    purchaseDate: '2022-04-01',
    lastAccessed: '2022-07-15',
    instructor: 'Jonas Schmedtmann',
    category: 'Desenvolvimento Web',
    duration: '28h',
    certificateEarned: true,
  },
  {
    id: '20',
    title: 'Typography & Layout Design',
    platform: 'Skillshare',
    status: 'subscription',
    progress: 90,
    price: 0,
    currency: 'USD',
    purchaseDate: '2024-02-01',
    lastAccessed: '2024-03-09',
    instructor: 'Ellen Lupton',
    category: 'Design',
    duration: '6h',
    certificateEarned: false,
  },
]

export const mockCertificates: Certificate[] = [
  {
    id: 'cert-1',
    courseTitle: 'The Complete JavaScript Course 2024',
    platform: 'Udemy',
    issueDate: '2023-09-20',
    credentialId: 'UC-7a8b9c0d',
    status: 'active',
    skills: ['JavaScript', 'ES6+', 'Node.js', 'React'],
    instructor: 'Jonas Schmedtmann',
  },
  {
    id: 'cert-2',
    courseTitle: 'UX Design Professional Certificate',
    platform: 'Coursera',
    issueDate: '2023-04-15',
    credentialId: 'COUR-GUX-2023',
    status: 'active',
    skills: ['UX Research', 'Prototyping', 'Figma', 'User Testing'],
    instructor: 'Google UX Team',
  },
  {
    id: 'cert-3',
    courseTitle: 'Fórmula de Lançamento',
    platform: 'Hotmart',
    issueDate: '2022-12-01',
    credentialId: 'HM-FL-22-4471',
    status: 'active',
    skills: ['Digital Marketing', 'Launch Strategy', 'Copywriting'],
    instructor: 'Érico Rocha',
  },
  {
    id: 'cert-4',
    courseTitle: 'NLW — Node.js Avançado',
    platform: 'Rocketseat',
    issueDate: '2023-10-18',
    credentialId: 'RS-NLW-2023-1018',
    status: 'active',
    skills: ['Node.js', 'TypeScript', 'Prisma', 'Docker'],
    instructor: 'Diego Fernandes',
  },
  {
    id: 'cert-5',
    courseTitle: 'React — The Complete Guide',
    platform: 'Udemy',
    issueDate: '2023-01-20',
    credentialId: 'UC-3e4f5g6h',
    status: 'active',
    skills: ['React', 'Redux', 'Hooks', 'Next.js'],
    instructor: 'Maximilian Schwarzmüller',
  },
  {
    id: 'cert-6',
    courseTitle: 'Advanced CSS and Sass',
    platform: 'Udemy',
    issueDate: '2022-07-15',
    credentialId: 'UC-1a2b3c4d',
    status: 'active',
    skills: ['CSS', 'Sass', 'Animations', 'Flexbox', 'Grid'],
    instructor: 'Jonas Schmedtmann',
  },
  {
    id: 'cert-7',
    courseTitle: 'Python for Everybody Specialization',
    platform: 'Coursera',
    issueDate: '2022-03-10',
    credentialId: 'COUR-PY4E-2022',
    status: 'active',
    skills: ['Python', 'Data Structures', 'APIs', 'Databases'],
    instructor: 'Dr. Chuck',
  },
  {
    id: 'cert-8',
    courseTitle: 'Digital Marketing Fundamentals',
    platform: 'LinkedIn Learning',
    issueDate: '2021-11-20',
    expiryDate: '2023-11-20',
    credentialId: 'LIN-DM-2021-889',
    status: 'expired',
    skills: ['SEO', 'SEM', 'Social Media', 'Analytics'],
    instructor: 'Brad Batesole',
  },
  {
    id: 'cert-9',
    courseTitle: 'Figma UI Design Masterclass',
    platform: 'Udemy',
    issueDate: '2023-06-01',
    credentialId: 'UC-fig-2023',
    status: 'active',
    skills: ['Figma', 'UI Design', 'Prototyping', 'Design Systems'],
    instructor: 'Caleb Kingston',
  },
  {
    id: 'cert-10',
    courseTitle: 'Git & GitHub Complete Guide',
    platform: 'Udemy',
    issueDate: '2021-05-15',
    credentialId: 'UC-git-2021',
    status: 'active',
    skills: ['Git', 'GitHub', 'Version Control', 'CI/CD'],
    instructor: 'Colt Steele',
  },
  {
    id: 'cert-11',
    courseTitle: 'Data Analysis with Python',
    platform: 'edX',
    issueDate: '2022-08-30',
    credentialId: 'EDX-DA-2022-IBM',
    status: 'active',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    instructor: 'IBM Skills Network',
  },
  {
    id: 'cert-12',
    courseTitle: 'SQL Bootcamp',
    platform: 'Udemy',
    issueDate: '2021-09-10',
    credentialId: 'UC-sql-2021',
    status: 'active',
    skills: ['SQL', 'PostgreSQL', 'Database Design', 'Queries'],
    instructor: 'Jose Portilla',
  },
]

export const mockPlatformConnections: PlatformConnection[] = [
  {
    id: 'pc-1',
    name: 'Udemy',
    email: 'alex@example.com',
    connectedAt: '2024-01-05',
    status: 'active',
    coursesFound: 14,
    lastSync: '2024-03-10T08:30:00Z',
  },
  {
    id: 'pc-2',
    name: 'Coursera',
    email: 'alex@example.com',
    connectedAt: '2024-01-06',
    status: 'active',
    coursesFound: 8,
    lastSync: '2024-03-10T08:32:00Z',
  },
  {
    id: 'pc-3',
    name: 'Hotmart',
    email: 'alex@example.com',
    connectedAt: '2024-01-07',
    status: 'active',
    coursesFound: 6,
    lastSync: '2024-03-10T08:33:00Z',
  },
  {
    id: 'pc-4',
    name: 'Rocketseat',
    email: 'alex@rocketseat.com.br',
    connectedAt: '2024-01-08',
    status: 'syncing',
    coursesFound: 4,
    lastSync: '2024-03-10T09:00:00Z',
  },
  {
    id: 'pc-5',
    name: 'LinkedIn Learning',
    email: 'alex@example.com',
    connectedAt: '2024-02-01',
    status: 'active',
    coursesFound: 12,
    lastSync: '2024-03-09T20:00:00Z',
  },
]

export const mockUserProfile: UserProfile = {
  id: 'user-1',
  name: 'Alex Morgan',
  email: 'alex@example.com',
  username: 'alexmorgan',
  headline: 'Desenvolvedor Full Stack & Aprendiz Contínuo',
  location: 'São Paulo, Brasil',
  bio: 'Construindo produtos que importam. Apaixonado por desenvolvimento web, IA e aprendizado contínuo.',
  skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL', 'UX Design', 'AWS', 'Docker'],
  joinedAt: '2024-01-05',
  totalInvested: 4847,
  totalCourses: 47,
  totalCertificates: 12,
  activeSubscriptions: 3,
}

export const mockAIInsights: AIInsight[] = [
  {
    id: 'ai-1',
    type: 'warning',
    message: 'Você tem 8 cursos abandonados em IA e Machine Learning. Retomar o mais relevante?',
    action: '/app/library?category=ai',
    actionLabel: 'Ver Cursos de IA',
    timestamp: '2024-03-10T08:00:00Z',
  },
  {
    id: 'ai-2',
    type: 'warning',
    message: 'Sua assinatura do Coursera renova em 12 dias. Você não acessa há 2 meses.',
    action: '/app/vault',
    actionLabel: 'Gerenciar Assinaturas',
    timestamp: '2024-03-09T10:00:00Z',
  },
  {
    id: 'ai-3',
    type: 'suggestion',
    message: 'Com base no seu perfil, estes 3 certificados teriam o maior retorno para sua carreira: AWS Solutions Architect, Google Cloud Professional e Kubernetes Administrator.',
    action: '/app/library',
    actionLabel: 'Explorar Trilhas',
    timestamp: '2024-03-08T14:00:00Z',
  },
  {
    id: 'ai-4',
    type: 'achievement',
    message: 'Você está no top 15% dos alunos do Udemy com 6 cursos concluídos este ano. Continue assim!',
    timestamp: '2024-03-07T09:00:00Z',
  },
  {
    id: 'ai-5',
    type: 'info',
    message: 'Você investiu R$24.235 na sua educação em 8 plataformas. Sua taxa de conclusão é 34% — melhorá-la para 60% desbloquearia mais 15 certificados.',
    action: '/app/library?status=in-progress',
    actionLabel: 'Ver Em Andamento',
    timestamp: '2024-03-06T12:00:00Z',
  },
  {
    id: 'ai-6',
    type: 'suggestion',
    message: 'Você tem 4 cursos em Design e 3 em Ciência de Dados com Python. Um curso de "Visualização de Dados" conectaria ambas as áreas de habilidade e está em alta demanda.',
    action: '/app/library',
    actionLabel: 'Encontrar Cursos',
    timestamp: '2024-03-05T16:00:00Z',
  },
]

export const mockVaultEntries: VaultEntry[] = [
  {
    id: 'vault-1',
    platform: 'Udemy',
    email: 'alex@example.com',
    lastUsed: '2024-03-10',
    status: 'active',
  },
  {
    id: 'vault-2',
    platform: 'Coursera',
    email: 'alex@example.com',
    lastUsed: '2024-03-08',
    status: 'active',
  },
  {
    id: 'vault-3',
    platform: 'Hotmart',
    email: 'alex@example.com',
    lastUsed: '2024-02-20',
    status: 'active',
  },
  {
    id: 'vault-4',
    platform: 'Rocketseat',
    email: 'alex@rocketseat.com.br',
    lastUsed: '2024-03-01',
    status: 'active',
  },
  {
    id: 'vault-5',
    platform: 'LinkedIn Learning',
    email: 'alex@example.com',
    lastUsed: '2024-03-09',
    status: 'active',
  },
  {
    id: 'vault-6',
    platform: 'Skillshare',
    email: 'alex@example.com',
    lastUsed: '2024-01-15',
    status: 'inactive',
    notes: 'Assinatura pausada',
  },
  {
    id: 'vault-7',
    platform: 'edX',
    email: 'alex@example.com',
    lastUsed: '2023-08-30',
    status: 'inactive',
    notes: 'Curso concluído',
  },
  {
    id: 'vault-8',
    platform: 'Kiwify',
    email: 'alex@example.com',
    lastUsed: '2024-02-10',
    status: 'active',
  },
]

export const spendingByPlatform = [
  { platform: 'Udemy', amount: 884, percentage: 82, color: 'bg-orange-400' },
  { platform: 'Coursera', amount: 1127, percentage: 68, color: 'bg-blue-400' },
  { platform: 'Hotmart', amount: 1794, percentage: 92, color: 'bg-red-400' },
  { platform: 'Rocketseat', amount: 591, percentage: 45, color: 'bg-purple-400' },
  { platform: 'Outros', amount: 451, percentage: 38, color: 'bg-zinc-500' },
]

export const topCategories = [
  { category: 'Desenvolvimento Web', count: 12, hours: 220 },
  { category: 'IA e Machine Learning', count: 8, hours: 149 },
  { category: 'Design', count: 7, hours: 102 },
  { category: 'Marketing', count: 6, hours: 84 },
  { category: 'Ciência de Dados', count: 5, hours: 116 },
  { category: 'Cloud e DevOps', count: 4, hours: 66 },
  { category: 'Mobile', count: 3, hours: 95 },
  { category: 'Negócios', count: 2, hours: 18 },
]
