import { createFileRoute } from '@tanstack/react-router'
import Autoplay from 'embla-carousel-autoplay'
import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../components/ui/carousel'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../components/ui/tooltip'

export const Route = createFileRoute('/projects')({
  component: Projects
})

function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      name: 'NLW Agents',
      description: 'AI-powered agents platform built with modern technologies',
      url: 'https://github.com/jordanpacheco1/nlwAgents',
      technologies: ['AI', 'TypeScript', 'Node.js']
    },
    {
      name: 'Ignite Lab Design System',
      description:
        'Modern design system built with React, Storybook and Radix UI',
      url: 'https://github.com/jordanpacheco1/ignite-lab-design-system',
      technologies: [
        'React',
        'TypeScript',
        'Storybook',
        'Radix UI',
        'Tailwind CSS'
      ]
    },
    {
      name: 'NLW Copa',
      description: 'Fullstack application for World Cup betting pools',
      url: 'https://github.com/jordanpacheco1/nlw-copa',
      technologies: ['React', 'React Native', 'Node.js', 'TypeScript', 'Prisma']
    },
    {
      name: 'Gympoint',
      description:
        'Complete gym management system with web and mobile applications',
      url: 'https://github.com/jordanpacheco1/Gympoint',
      technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redux']
    },
    {
      name: 'Podcastr',
      description:
        'Modern podcast platform with audio player and episode management',
      url: 'https://github.com/jordanpacheco1/podcastr-nlw-5',
      technologies: ['Next.js', 'React', 'TypeScript', 'Sass', 'Context API']
    },
    {
      name: 'NLW Expert Notes',
      description: 'Note-taking application with voice recording capabilities',
      url: 'https://github.com/jordanpacheco1/nlw-expert-notes',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS']
    },
    {
      name: 'NLW Move.it',
      description: 'Pomodoro timer with exercise challenges for developers',
      url: 'https://github.com/jordanpacheco1/nlw-move-it',
      technologies: ['Next.js', 'React', 'TypeScript', 'CSS Modules']
    },
    {
      name: 'NLW Expert C# Auction',
      description: 'Auction system built with C# and .NET technologies',
      url: 'https://github.com/jordanpacheco1/nlw-expert-c-sharp-rocketseat-auction',
      technologies: ['C#', '.NET', 'Entity Framework', 'SQL Server']
    },
    {
      name: 'Quality Auth',
      description: 'Authentication system for Quality Systems ReactJS position',
      url: 'https://github.com/jordanpacheco1/quality-auth',
      technologies: ['React', 'JavaScript', 'CSS']
    },
    {
      name: 'GoStack9 Módulo 03',
      description: 'GoBarber project from GoStack9 bootcamp module 3',
      url: 'https://github.com/jordanpacheco1/GoStack9-Modulo03',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL']
    },
    {
      name: 'GoStack09 Módulo 05',
      description: 'First ReactJS project from GoStack9 bootcamp',
      url: 'https://github.com/jordanpacheco1/GoStack09-Modulo05',
      technologies: ['React', 'JavaScript', 'Styled Components']
    },
    {
      name: 'GoStack Conceitos ReactJS',
      description: 'ReactJS fundamentals challenge from GoStack bootcamp',
      url: 'https://github.com/jordanpacheco1/gostack-conceitos-reactjs',
      technologies: ['React', 'JavaScript', 'Webpack']
    },
    {
      name: 'Desafios Conceitos Node GoStack',
      description: 'Node.js fundamentals challenge from GoStack bootcamp',
      url: 'https://github.com/jordanpacheco1/desafios-conceitos-node-gostack',
      technologies: ['Node.js', 'Express', 'JavaScript']
    },
    {
      name: 'Desafio Fundamentos NodeJS',
      description: 'Node.js fundamentals challenge with file upload',
      url: 'https://github.com/jordanpacheco1/desafio-fundamentos-nodejs',
      technologies: ['Node.js', 'TypeScript', 'Express']
    },
    {
      name: 'GoStack Conceitos React Native',
      description: 'React Native fundamentals challenge from GoStack bootcamp',
      url: 'https://github.com/jordanpacheco1/gostack-conceitos-react-native',
      technologies: ['React Native', 'JavaScript', 'Metro']
    },
    {
      name: 'GoStack Database Upload',
      description: 'Database and file upload challenge from GoStack bootcamp',
      url: 'https://github.com/jordanpacheco1/gostack-database-upload',
      technologies: ['Node.js', 'TypeScript', 'TypeORM', 'PostgreSQL']
    },
    {
      name: 'GoStack Database Relations',
      description: 'Database relationships challenge from GoStack bootcamp',
      url: 'https://github.com/jordanpacheco1/gostack-database-relations',
      technologies: ['Node.js', 'TypeScript', 'TypeORM', 'PostgreSQL']
    },
    {
      name: 'GoStack Template React Native',
      description: 'React Native template for GoStack challenges',
      url: 'https://github.com/jordanpacheco1/gostack-template-react-native-delivery',
      technologies: ['React Native', 'TypeScript', 'Styled Components']
    },
    {
      name: 'GoStack Template NodeJS',
      description: 'Node.js template for GoStack challenges',
      url: 'https://github.com/jordanpacheco1/gostack-template-typeorm-upload',
      technologies: ['Node.js', 'TypeScript', 'TypeORM', 'Express']
    },
    {
      name: 'GoStack Template ReactJS',
      description: 'ReactJS template for GoStack challenges',
      url: 'https://github.com/jordanpacheco1/gostack-template-reactjs-crud',
      technologies: ['React', 'TypeScript', 'Styled Components']
    },
    {
      name: 'GoStack Template Fundamentos Node',
      description: 'Node.js fundamentals template for GoStack challenges',
      url: 'https://github.com/jordanpacheco1/gostack-template-fundamentos-node',
      technologies: ['Node.js', 'TypeScript', 'Express']
    },
    {
      name: 'GoStack Template Fundamentos ReactJS',
      description: 'ReactJS fundamentals template for GoStack challenges',
      url: 'https://github.com/jordanpacheco1/gostack-template-fundamentos-reactjs',
      technologies: ['React', 'TypeScript', 'Styled Components']
    },
    {
      name: 'GoStack Template Fundamentos React Native',
      description: 'React Native fundamentals template for GoStack challenges',
      url: 'https://github.com/jordanpacheco1/gostack-template-fundamentos-react-native',
      technologies: ['React Native', 'TypeScript', 'Styled Components']
    },
    {
      name: 'GoStack Typeorm Relations',
      description: 'TypeORM relationships implementation for GoStack',
      url: 'https://github.com/jordanpacheco1/gostack-typeorm-relations',
      technologies: ['Node.js', 'TypeScript', 'TypeORM', 'PostgreSQL']
    },
    {
      name: 'GoStack Typeorm Upload',
      description: 'File upload with TypeORM for GoStack bootcamp',
      url: 'https://github.com/jordanpacheco1/gostack-typeorm-upload',
      technologies: ['Node.js', 'TypeScript', 'TypeORM', 'Multer']
    },
    {
      name: 'Fastfeet',
      description: 'Delivery management system from GoStack final challenge',
      url: 'https://github.com/jordanpacheco1/fastfeet',
      technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Redis']
    },
    {
      name: 'GoBarber',
      description: 'Barber shop scheduling system from GoStack bootcamp',
      url: 'https://github.com/jordanpacheco1/gobarber',
      technologies: [
        'React',
        'React Native',
        'Node.js',
        'TypeScript',
        'PostgreSQL'
      ]
    },
    {
      name: 'GoStack GoBarber API',
      description: 'GoBarber backend API with authentication and scheduling',
      url: 'https://github.com/jordanpacheco1/gostack-gobarber-api',
      technologies: [
        'Node.js',
        'TypeScript',
        'Express',
        'TypeORM',
        'PostgreSQL'
      ]
    },
    {
      name: 'GoStack GoBarber Web',
      description: 'GoBarber web frontend for barber shop management',
      url: 'https://github.com/jordanpacheco1/gostack-gobarber-web',
      technologies: ['React', 'TypeScript', 'Styled Components', 'Axios']
    },
    {
      name: 'GoStack GoBarber Mobile',
      description: 'GoBarber mobile app for customers to schedule appointments',
      url: 'https://github.com/jordanpacheco1/gostack-gobarber-mobile',
      technologies: ['React Native', 'TypeScript', 'Styled Components']
    },
    {
      name: 'GoStack React Native Delivery',
      description: 'Food delivery app built with React Native',
      url: 'https://github.com/jordanpacheco1/gostack-react-native-delivery',
      technologies: ['React Native', 'TypeScript', 'Styled Components']
    },
    {
      name: 'GoStack ReactJS CRUD',
      description: 'CRUD application built with ReactJS',
      url: 'https://github.com/jordanpacheco1/gostack-reactjs-crud',
      technologies: ['React', 'TypeScript', 'Styled Components']
    },
    {
      name: 'Ecoleta',
      description: 'Waste collection marketplace from Next Level Week',
      url: 'https://github.com/jordanpacheco1/ecoleta',
      technologies: ['React', 'React Native', 'Node.js', 'TypeScript', 'SQLite']
    },
    {
      name: 'Be The Hero',
      description: 'Platform connecting NGOs with people who want to help',
      url: 'https://github.com/jordanpacheco1/be-the-hero',
      technologies: ['React', 'React Native', 'Node.js', 'SQLite']
    },
    {
      name: 'Aircnc',
      description: 'Airbnb clone for developers to find tech spots',
      url: 'https://github.com/jordanpacheco1/aircnc',
      technologies: ['React', 'React Native', 'Node.js', 'MongoDB']
    },
    {
      name: 'DevRadar',
      description: 'Platform to find developers near you based on technologies',
      url: 'https://github.com/jordanpacheco1/devradar',
      technologies: ['React', 'React Native', 'Node.js', 'MongoDB']
    },
    {
      name: 'TinDev',
      description: 'Tinder for developers to connect based on GitHub profiles',
      url: 'https://github.com/jordanpacheco1/tindev',
      technologies: ['React', 'React Native', 'Node.js', 'MongoDB']
    },
    {
      name: 'Proffy',
      description: 'Online teaching platform connecting students and teachers',
      url: 'https://github.com/jordanpacheco1/proffy',
      technologies: ['React', 'React Native', 'Node.js', 'TypeScript', 'SQLite']
    },
    {
      name: 'Happy',
      description: 'Platform to find and visit orphanages near you',
      url: 'https://github.com/jordanpacheco1/happy',
      technologies: ['React', 'React Native', 'Node.js', 'TypeScript', 'SQLite']
    },
    {
      name: 'Plant Manager',
      description: 'Plant care reminder app with watering schedules',
      url: 'https://github.com/jordanpacheco1/plantmanager',
      technologies: ['React Native', 'TypeScript', 'Expo']
    },
    {
      name: 'GamePlay',
      description: 'Discord integration app for gaming communities',
      url: 'https://github.com/jordanpacheco1/gameplay',
      technologies: ['React Native', 'TypeScript', 'Expo', 'Discord API']
    },
    {
      name: 'RentX',
      description: 'Car rental application with modern UI',
      url: 'https://github.com/jordanpacheco1/rentx',
      technologies: ['React Native', 'TypeScript', 'Styled Components']
    }
  ]

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 text-center'>
          <h1 className='mb-4 font-bold text-4xl'>{t('projects.title')}</h1>
          <p className='text-muted-foreground text-xl'>
            {t('projects.description')}
          </p>
          <p className='mt-2 text-muted-foreground text-sm'>
            {projects.length} {t('projects.publicRepositories')}
          </p>
        </div>

        <TooltipProvider>
          <Carousel
            className='mx-auto w-full max-w-5xl'
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent className='-ml-2'>
              {projects.map((project) => (
                <CarouselItem
                  className='min-w-0 max-w-full pl-2 md:basis-1/2 lg:basis-1/3'
                  key={project.name}
                >
                  <Card className='group flex h-full w-full max-w-full select-none flex-col overflow-hidden transition-shadow hover:shadow-lg'>
                    <CardHeader className='pb-3'>
                      <CardTitle className='flex min-w-0 items-center justify-between gap-2 text-lg leading-tight'>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className='min-w-0 flex-1 cursor-help overflow-hidden truncate text-ellipsis whitespace-nowrap font-semibold'>
                              {project.name}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{project.name}</p>
                          </TooltipContent>
                        </Tooltip>
                        <div className='ml-2 flex flex-shrink-0 gap-1'>
                          <Button asChild size='sm' variant='outline'>
                            <a
                              href={project.url}
                              rel='noopener noreferrer'
                              target='_blank'
                            >
                              <ExternalLink className='h-4 w-4' />
                            </a>
                          </Button>
                          <Button asChild size='sm' variant='outline'>
                            <a
                              href={project.url}
                              rel='noopener noreferrer'
                              target='_blank'
                            >
                              <img
                                alt='GitHub icon'
                                className='h-4 w-4'
                                src='/github-icon.svg'
                              />
                            </a>
                          </Button>
                        </div>
                      </CardTitle>
                      <CardDescription className='mt-1 line-clamp-2 text-muted-foreground text-sm'>
                        {project.description || 'No description available'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className='flex-1 pt-0'>
                      <div className='flex flex-wrap gap-1'>
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            className='text-xs'
                            key={`${project.name}-${tech}`}
                            variant='secondary'
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge className='text-xs' variant='outline'>
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TooltipProvider>
      </div>
    </div>
  )
}
