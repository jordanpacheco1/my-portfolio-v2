import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/')({
  component: Home
})

function Home() {
  const { t } = useTranslation()
  const router = useRouter()

  const handleSocialLinkClick = (platform: string) => {
    toast.success(`Opening ${platform} profile`)
  }

  const handleEmailClick = () => {
    toast.success('Opening email client')
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center'>
        <Avatar className='mb-4 size-24'>
          <AvatarImage alt='Profile' src='/jordan.jpg' />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <h1 className='mb-2 text-center font-bold text-4xl'>{t('title')}</h1>
        <p className='mb-4 max-w-md text-center text-lg'>{t('description')}</p>

        {/* Social Links */}
        <div className='mb-8 flex gap-4'>
          <Button asChild size='sm' variant='outline'>
            <a
              href='https://github.com/jordanpacheco1'
              onClick={() => handleSocialLinkClick('GitHub')}
              rel='noopener noreferrer'
              target='_blank'
            >
              <img
                alt='GitHub icon'
                className='h-4 w-4'
                src='/github-icon.svg'
              />
              GitHub
            </a>
          </Button>
          <Button asChild size='sm' variant='outline'>
            <a
              href='https://linkedin.com/in/jordan-pacheco'
              onClick={() => handleSocialLinkClick('LinkedIn')}
              rel='noopener noreferrer'
              target='_blank'
            >
              <svg
                aria-label='LinkedIn icon'
                className='h-4 w-4'
                fill='currentColor'
                role='img'
                viewBox='0 0 24 24'
              >
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
              </svg>
              LinkedIn
            </a>
          </Button>
          <Button asChild size='sm' variant='outline'>
            <a href='mailto:contato.jpdev@gmail.com' onClick={handleEmailClick}>
              <Mail />
              Email
            </a>
          </Button>
        </div>

        <Separator className='mb-8 w-24' />

        {/* Skills Section */}
        <div className='mb-8 w-full max-w-2xl'>
          <h2 className='mb-4 text-center font-semibold text-xl'>
            {t('skills.title')}
          </h2>
          <div className='flex flex-wrap justify-center gap-2'>
            <Badge variant='default'>JavaScript</Badge>
            <Badge variant='default'>TypeScript</Badge>
            <Badge variant='default'>React</Badge>
            <Badge variant='default'>React Native</Badge>
            <Badge variant='default'>Next.js</Badge>
            <Badge variant='default'>Node.js</Badge>
            <Badge variant='default'>PostgreSQL</Badge>
            <Badge variant='default'>MongoDB</Badge>
            <Badge variant='default'>Docker</Badge>
            <Badge variant='default'>Git</Badge>
            <Badge variant='default'>Figma</Badge>
          </div>
        </div>

        <Separator className='mb-8 w-24' />

        <div className='grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2'>
          <Card
            className='cursor-pointer transition-all hover:scale-105 hover:bg-accent/50 hover:shadow-lg'
            onClick={() => router.navigate({ to: '/projects' })}
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <svg
                  aria-label='Projects icon'
                  className='h-5 w-5'
                  fill='none'
                  role='img'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                  />
                </svg>
                {t('projects.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t('projects.description')}</CardDescription>
              <div className='mt-4 flex flex-wrap gap-2'>
                <Badge variant='secondary'>React</Badge>
                <Badge variant='secondary'>TypeScript</Badge>
                <Badge variant='secondary'>Tailwind CSS</Badge>
                <Badge variant='secondary'>Node.js</Badge>
              </div>
            </CardContent>
          </Card>
          <Card
            className='cursor-pointer transition-all hover:scale-105 hover:shadow-lg'
            onClick={() => router.navigate({ to: '/about' })}
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <svg
                  aria-label='About icon'
                  className='h-5 w-5'
                  fill='none'
                  role='img'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                  />
                </svg>
                {t('about.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t('about.description')}</CardDescription>
              <div className='mt-4 flex flex-wrap gap-2'>
                <Badge variant='outline'>Frontend</Badge>
                <Badge variant='outline'>Backend</Badge>
                <Badge variant='outline'>UI/UX</Badge>
                <Badge variant='outline'>DevOps</Badge>
              </div>
            </CardContent>
          </Card>

          <Card
            className='cursor-pointer transition-all hover:scale-105 hover:bg-accent/50 hover:shadow-lg'
            onClick={() => router.navigate({ to: '/contact' })}
          >
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <svg
                  aria-label='Contact icon'
                  className='h-5 w-5'
                  fill='none'
                  role='img'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                  />
                </svg>
                {t('contact.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t('contact.description')}</CardDescription>
              <div className='mt-4 flex flex-wrap gap-2'>
                <Badge>Email</Badge>
                <Badge>LinkedIn</Badge>
                <Badge>GitHub</Badge>
                <Badge>Portfolio</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
