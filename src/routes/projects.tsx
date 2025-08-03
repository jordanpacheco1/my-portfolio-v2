import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import Autoplay from 'embla-carousel-autoplay'
import {
  ExternalLink,
  GitFork,
  Globe,
  Loader2,
  RefreshCw,
  Star
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
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
import { fetchProjects } from '../lib/github'

export const Route = createFileRoute('/projects')({
  component: Projects
})

function Projects() {
  const { t } = useTranslation()

  const {
    data: projects = [],
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['github-projects'],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000 // 10 minutes
  })

  const handleExternalLinkClick = (projectName: string) => {
    toast.success(`Opening ${projectName} on GitHub`)
  }

  const handleRefresh = () => {
    refetch()
    toast.info('Refreshing projects from GitHub...')
  }

  if (isLoading) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <h1 className='mb-4 font-bold text-4xl'>{t('projects.title')}</h1>
            <p className='text-muted-foreground text-xl'>
              {t('projects.description')}
            </p>
          </div>
          <div className='flex items-center justify-center py-12'>
            <div className='flex flex-col items-center gap-4'>
              <Loader2 className='h-8 w-8 animate-spin' />
              <p className='text-muted-foreground'>
                Loading projects from GitHub...
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-12 text-center'>
            <h1 className='mb-4 font-bold text-4xl'>{t('projects.title')}</h1>
            <p className='text-muted-foreground text-xl'>
              {t('projects.description')}
            </p>
          </div>
          <div className='flex items-center justify-center py-12'>
            <div className='flex flex-col items-center gap-4 text-center'>
              <div className='rounded-full bg-red-100 p-3 dark:bg-red-900/20'>
                <ExternalLink className='h-6 w-6 text-red-600 dark:text-red-400' />
              </div>
              <div>
                <h3 className='font-semibold text-lg'>
                  Failed to load projects
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {error instanceof Error
                    ? error.message
                    : 'Unable to fetch repositories from GitHub'}
                </p>
              </div>
              <Button
                className='mt-2'
                onClick={handleRefresh}
                variant='outline'
              >
                <RefreshCw className='mr-2 h-4 w-4' />
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 text-center'>
          <div className='mb-4 flex items-center justify-center gap-4'>
            <h1 className='font-bold text-4xl'>{t('projects.title')}</h1>
            <Button
              className='ml-2'
              onClick={handleRefresh}
              size='sm'
              variant='outline'
            >
              <RefreshCw className='h-4 w-4' />
            </Button>
          </div>
          <p className='text-muted-foreground text-xl'>
            {t('projects.description')}
          </p>
          <p className='mt-2 text-muted-foreground text-sm'>
            Showing {projects.length} public repositories from GitHub
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
                      <CardTitle className='flex items-center justify-between'>
                        <span>{project.name}</span>
                        <div className='flex items-center gap-1'>
                          {project.demoUrl && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  onClick={() => {
                                    window.open(project.demoUrl, '_blank')
                                    handleExternalLinkClick(
                                      `${project.name} Demo`
                                    )
                                  }}
                                  size='sm'
                                  variant='ghost'
                                >
                                  <Globe className='h-4 w-4' />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View Demo</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                          {!project.private && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  onClick={() => {
                                    window.open(project.url, '_blank')
                                    handleExternalLinkClick(project.name)
                                  }}
                                  size='sm'
                                  variant='ghost'
                                >
                                  <ExternalLink className='h-4 w-4' />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View on GitHub</p>
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </div>
                      </CardTitle>
                      <CardDescription>
                        {project.description || 'No description available'}
                      </CardDescription>
                      <div className='mt-2 flex items-center gap-4 text-muted-foreground text-xs'>
                        {project.stars !== undefined && (
                          <div className='flex items-center gap-1'>
                            <Star className='h-3 w-3' />
                            <span>{project.stars}</span>
                          </div>
                        )}
                        {project.forks !== undefined && (
                          <div className='flex items-center gap-1'>
                            <GitFork className='h-3 w-3' />
                            <span>{project.forks}</span>
                          </div>
                        )}
                      </div>
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
