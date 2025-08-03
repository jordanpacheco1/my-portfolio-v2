import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
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

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  // Form submission handler
  const onSubmit = async (data: ContactFormValues) => {
    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL

      // Check if all required environment variables are set
      if (!(serviceId && templateId && publicKey && recipientEmail)) {
        console.error(
          'EmailJS configuration missing. Please check your environment variables.'
        )
        setSubmitStatus('error')
        return
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: recipientEmail
        },
        publicKey
      )

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')
    }
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

          {submitStatus === 'success' && (
            <div className='mt-4 rounded-md bg-green-50 p-4 text-green-800 dark:bg-green-900/20 dark:text-green-400'>
              <p className='font-medium text-sm'>{t('contact.form.success')}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className='mt-4 rounded-md bg-red-50 p-4 text-red-800 dark:bg-red-900/20 dark:text-red-400'>
              <p className='font-medium text-sm'>{t('contact.form.error')}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
