# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email

## Step 2: Add Gmail Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **"Add Service"**
3. Select **"Gmail"**
4. Follow the instructions to connect your Gmail account
5. Note down your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **"Create New Template"**
3. Name it: `portfolio_contact_form`
4. Replace the template with this:

```
To Email: {{to_email}}
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Reply to: {{reply_to}}
```

5. Click **"Save"**
6. Note down your **Template ID** (visible at the top)

## Step 4: Get Your Public Key
1. Go to **Account** (top right)
2. Copy your **Public Key**

## Step 5: Create Environment File
Create a file named `.env.local` in the root of your project with:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
```

Replace:
- `your_public_key_here` with your Public Key
- `service_xxxxx` with your Service ID
- `template_xxxxx` with your Template ID

## Step 6: Restart Development Server
```
npm run dev
```

## Testing
1. Go to http://localhost:3000
2. Scroll to Contact section
3. Fill out the form and submit
4. Check your email for the message!

## Free Plan Limits
- 200 emails/month
- Perfect for portfolio websites
- Can upgrade anytime

## Troubleshooting
- If emails aren't sending, check the EmailJS Activity tab on the dashboard
- Make sure Gmail is properly connected
- Verify environment variables are set correctly
