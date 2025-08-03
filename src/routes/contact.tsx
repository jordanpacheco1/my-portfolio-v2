import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const Route = createFileRoute('/contact')({
  component: Contact
})

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
})

// Infer the type from the schema
type ContactFormValues = z.infer<typeof contactFormSchema>

function Contact() {
  const { t } = useTranslation()

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  })

  // Form submission handler
  const onSubmit = async (_data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Form data would be sent to an API here
    reset()
    alert(t('contact.form.success'))
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <h1 className='mb-6 text-center font-bold text-3xl'>
          {t('contact.title')}
        </h1>

        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-2'>
            <Label htmlFor='name'>{t('contact.form.name')}</Label>
            <Input id='name' {...register('name')} />
            {errors.name && (
              <p className='text-destructive text-sm'>{errors.name.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>{t('contact.form.email')}</Label>
            <Input id='email' type='email' {...register('email')} />
            {errors.email && (
              <p className='text-destructive text-sm'>{errors.email.message}</p>
            )}
          </div>

          <div className='space-y-2'>
            <Label htmlFor='message'>{t('contact.form.message')}</Label>
            <Textarea id='message' {...register('message')} rows={4} />
            {errors.message && (
              <p className='text-destructive text-sm'>
                {errors.message.message}
              </p>
            )}
          </div>

          <Button className='w-full' disabled={isSubmitting} type='submit'>
            {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
          </Button>
        </form>
      </div>
    </div>
  )
}
