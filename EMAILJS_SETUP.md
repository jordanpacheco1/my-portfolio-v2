# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality in your portfolio.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Make sure to use these variable names:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{message}}` - the message content
   - `{{to_email}}` - your email (recipient)

5. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Configure Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_RECIPIENT_EMAIL=your-email@example.com
```

3. Replace the placeholder values with your actual EmailJS credentials:
   - `VITE_EMAILJS_SERVICE_ID`: Your Service ID from Step 2
   - `VITE_EMAILJS_TEMPLATE_ID`: Your Template ID from Step 3
   - `VITE_EMAILJS_PUBLIC_KEY`: Your Public Key from Step 4
   - `VITE_RECIPIENT_EMAIL`: Your email address where you want to receive messages

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the message
5. Check the browser console for any errors

## Troubleshooting

### Common Issues:

1. **"EmailJS configuration missing" error**:
   - Make sure your `.env` file is in the project root
   - Verify all environment variables are set correctly
   - Restart your development server after adding the `.env` file

2. **Email not received**:
   - Check your spam/junk folder
   - Verify your EmailJS service is properly configured
   - Test your template in the EmailJS dashboard

3. **"Failed to send email" error**:
   - Check the browser console for detailed error messages
   - Verify your Public Key is correct
   - Make sure your EmailJS service is active

### EmailJS Free Plan Limits:

- 200 emails per month
- EmailJS branding in emails
- Basic support

For higher limits, consider upgrading to a paid plan.

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Environment variables starting with `VITE_` are exposed to the client-side
- This is safe for EmailJS as it's designed for client-side use

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/sdk/installation/)
- [EmailJS Templates Guide](https://www.emailjs.com/docs/user-guide/creating-templates/)