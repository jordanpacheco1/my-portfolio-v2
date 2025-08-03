import { useTheme } from 'next-themes'
import { Toaster as Sonner, type ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      className='toaster group'
      theme={theme as ToasterProps['theme']}
      toastOptions={{
        unstyled: true,
        classNames: {
          success:
            'bg-green-800 text-white border-green-800 rounded-lg p-4 shadow-lg flex items-center gap-2',
          error:
            'bg-red-800 text-white border-red-800 rounded-lg p-4 shadow-lg flex items-center gap-2',
          warning:
            'bg-yellow-700 text-white border-yellow-700 rounded-lg p-4 shadow-lg flex items-center gap-2',
          info: 'bg-blue-800 text-white border-blue-800 rounded-lg p-4 shadow-lg flex items-center gap-2'
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
