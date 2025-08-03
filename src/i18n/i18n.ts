import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// English translations
const enTranslations = {
  title: 'Jordan Pacheco Borges',
  welcome: 'Welcome to My Portfolio',
  description:
    'Full Stack Developer & UI/UX Designer passionate about creating amazing digital experiences.',
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact'
  },
  skills: {
    title: 'Technical Skills'
  },
  projects: {
    title: 'Projects',
    description: 'Check out my latest work and projects.',
    publicRepositories: 'public repositories'
  },
  about: {
    title: 'About Me',
    subtitle:
      'Full Stack Developer & UI/UX Designer passionate about creating amazing digital experiences.',
    description: 'Learn more about my skills and experience.',
    personal: {
      title: 'Personal Information',
      languages:
        'Portuguese (Native), English (Fluent since age 14), Italian (Intermediate)',
      description:
        'Passionate about technology since age 7, I have been developing my skills in web development and always seeking to learn new technologies and best practices.'
    },
    experience: {
      title: 'Professional Experience',
      current: {
        description:
          'Currently working as a Mid Web Developer, leading frontend projects and mentoring junior developers while implementing modern web technologies.'
      },
      frontend: {
        description:
          'Developed and maintained web applications using React, Next.js, and React Native. Collaborated with cross-functional teams to deliver high-quality user experiences.'
      }
    },
    skills: {
      title: 'Technical Skills',
      frontend: 'Frontend Technologies',
      backend: 'Backend Technologies',
      tools: 'Tools & DevOps'
    },
    cta: {
      title: "Let's Work Together",
      description:
        "I'm always interested in new opportunities and exciting projects.",
      contact: 'Get in Touch',
      linkedin: 'View LinkedIn'
    }
  },

  contact: {
    title: 'Contact',
    description: 'Get in touch with me for collaborations.',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.'
    }
  }
}

// Brazilian Portuguese translations
const ptBRTranslations = {
  title: 'Jordan Pacheco Borges',
  welcome: 'Bem-vindo ao Meu Portfólio',
  description:
    'Desenvolvedor Full Stack & Designer UI/UX apaixonado por criar experiências digitais incríveis.',
  nav: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato'
  },
  skills: {
    title: 'Habilidades Técnicas'
  },
  projects: {
    title: 'Projetos',
    description: 'Confira meus trabalhos e projetos mais recentes.',
    publicRepositories: 'repositórios públicos'
  },
  about: {
    title: 'Sobre Mim',
    subtitle:
      'Desenvolvedor Full Stack & Designer UI/UX apaixonado por criar experiências digitais incríveis.',
    description: 'Saiba mais sobre minhas habilidades e experiência.',
    personal: {
      title: 'Informações Pessoais',
      languages:
        'Português (Nativo), Inglês (Fluente desde os 14 anos), Italiano (Intermediário)',
      description:
        'Apaixonado por tecnologia desde os 7 anos, venho desenvolvendo minhas habilidades em desenvolvimento web e sempre buscando aprender novas tecnologias e melhores práticas.'
    },
    experience: {
      title: 'Experiência Profissional',
      current: {
        description:
          'Atualmente trabalhando como Desenvolvedor Web Pleno, liderando projetos frontend e mentorando desenvolvedores juniores enquanto implemento tecnologias web modernas.'
      },
      frontend: {
        description:
          'Desenvolvi e mantive aplicações web usando React, Next.js e React Native. Colaborei com equipes multifuncionais para entregar experiências de usuário de alta qualidade.'
      }
    },
    skills: {
      title: 'Habilidades Técnicas',
      frontend: 'Tecnologias Frontend',
      backend: 'Tecnologias Backend',
      tools: 'Ferramentas & DevOps'
    },
    cta: {
      title: 'Vamos Trabalhar Juntos',
      description:
        'Estou sempre interessado em novas oportunidades e projetos empolgantes.',
      contact: 'Entre em Contato',
      linkedin: 'Ver LinkedIn'
    }
  },

  contact: {
    title: 'Contato',
    description: 'Entre em contato comigo para colaborações.',
    form: {
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Falha ao enviar mensagem. Tente novamente.'
    }
  }
}

const i18n = i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      'pt-BR': {
        translation: ptBRTranslations
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  })

export default i18n
