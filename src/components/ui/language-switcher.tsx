import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import { BrazilFlag, USFlag } from '@/components/ui/flag-icons'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt-BR' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <Button
      aria-label={`Switch to ${i18n.language === 'en' ? 'Portuguese' : 'English'}`}
      className='flex items-center gap-2'
      onClick={toggleLanguage}
      size='sm'
      variant='outline'
    >
      {i18n.language === 'pt-BR' ? (
        <>
          <BrazilFlag className='h-4 w-4' />
          PT
        </>
      ) : (
        <>
          <USFlag className='h-4 w-4' />
          EN
        </>
      )}
    </Button>
  )
}
