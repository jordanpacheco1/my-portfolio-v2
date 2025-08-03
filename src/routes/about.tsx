import { createFileRoute } from '@tanstack/react-router'
import { Briefcase, GraduationCap, Languages, MapPin, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/about')({
  component: About
})

function About() {
  const { t } = useTranslation()

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-4xl space-y-8'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='mb-4 font-bold text-4xl'>{t('about.title')}</h1>
          <p className='text-muted-foreground text-xl'>{t('about.subtitle')}</p>
        </div>

        {/* Personal Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <User className='h-5 w-5' />
              {t('about.personal.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='flex items-center gap-2'>
                <MapPin className='h-4 w-4 text-muted-foreground' />
                <span>Uberlândia, Minas Gerais, Brasil</span>
              </div>
              <div className='flex items-center gap-2'>
                <Languages className='h-4 w-4 text-muted-foreground' />
                <span>{t('about.personal.languages')}</span>
              </div>
            </div>
            <p className='text-muted-foreground'>
              {t('about.personal.description')}
            </p>
          </CardContent>
        </Card>

        {/* Experience Card */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Briefcase className='h-5 w-5' />
              {t('about.experience.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            {/* Current Position */}
            <div className='space-y-2'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='font-semibold'>Mid Web Developer</h3>
                  <p className='text-muted-foreground text-sm'>
                    Quality Systems
                  </p>
                </div>
                <Badge variant='secondary'>Mar 2024 - Mar 2025</Badge>
              </div>
              <p className='text-muted-foreground text-sm'>
                {t('about.experience.current.description')}
              </p>
            </div>

            <Separator />

            {/* Previous Position */}
            <div className='space-y-2'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='font-semibold'>Front-end Developer</h3>
                  <p className='text-muted-foreground text-sm'>
                    Quality Systems
                  </p>
                </div>
                <Badge variant='outline'>Mar 2021 - Mar 2024</Badge>
              </div>
              <p className='text-muted-foreground text-sm'>
                {t('about.experience.frontend.description')}
              </p>
            </div>

            <Separator />

            {/* Other Experience */}
            <div className='space-y-2'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='font-semibold'>Customer Support Analyst I</h3>
                  <p className='text-muted-foreground text-sm'>Martins</p>
                </div>
                <Badge variant='outline'>Mar 2020 - Mar 2021</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills Card */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <GraduationCap className='h-5 w-5' />
              {t('about.skills.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              <div>
                <h4 className='mb-2 font-medium'>
                  {t('about.skills.frontend')}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>React Native</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>Tailwind CSS</Badge>
                </div>
              </div>
              <div>
                <h4 className='mb-2 font-medium'>
                  {t('about.skills.backend')}
                </h4>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary'>Node.js</Badge>
                  <Badge variant='secondary'>PostgreSQL</Badge>
                  <Badge variant='secondary'>MongoDB</Badge>
                </div>
              </div>
              <div>
                <h4 className='mb-2 font-medium'>{t('about.skills.tools')}</h4>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='outline'>Git</Badge>
                  <Badge variant='outline'>Docker</Badge>
                  <Badge variant='outline'>Figma</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4 text-center'>
              <h3 className='font-semibold text-xl'>{t('about.cta.title')}</h3>
              <p className='text-muted-foreground'>
                {t('about.cta.description')}
              </p>
              <div className='flex justify-center gap-4'>
                <Button asChild>
                  <a href='/contact'>{t('about.cta.contact')}</a>
                </Button>
                <Button asChild variant='outline'>
                  <a
                    href='https://linkedin.com/in/jordan-pacheco'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {t('about.cta.linkedin')}
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
