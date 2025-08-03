import { Link } from '@tanstack/react-router'
import { FolderOpen, Home, Mail, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './ui/language-switcher'

export function Header() {
  const { t } = useTranslation()

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto flex h-14 items-center justify-between px-4 md:px-6'>
        <nav className='flex items-center space-x-4 font-medium text-xs md:text-sm'>
          <Link
            activeProps={{
              className: 'text-foreground'
            }}
            className='flex items-center space-x-2 transition-colors hover:text-foreground/80 [&.active]:text-foreground'
            to='/'
          >
            <Home className='h-4 w-4' />
            <span>{t('nav.home')}</span>
          </Link>
          <Link
            activeProps={{
              className: 'text-foreground'
            }}
            className='flex items-center space-x-2 transition-colors hover:text-foreground/80 [&.active]:text-foreground'
            to='/about'
          >
            <User className='h-4 w-4' />
            <span>{t('nav.about')}</span>
          </Link>
          <Link
            activeProps={{
              className: 'text-foreground'
            }}
            className='flex items-center space-x-2 transition-colors hover:text-foreground/80 [&.active]:text-foreground'
            to='/projects'
          >
            <FolderOpen className='h-4 w-4' />
            <span>{t('nav.projects')}</span>
          </Link>
          <Link
            activeProps={{
              className: 'text-foreground'
            }}
            className='flex items-center space-x-2 transition-colors hover:text-foreground/80 [&.active]:text-foreground'
            to='/contact'
          >
            <Mail className='h-4 w-4' />
            <span>{t('nav.contact')}</span>
          </Link>
        </nav>
        <div className='ml-4'>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
