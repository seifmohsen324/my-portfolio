# EmailJS Template Setup Guide

## EmailJS Email Template

This is the recommended template to use in your EmailJS dashboard.

### Template Configuration:

**Template Name:** `portfolio_contact`

**Email Content (Template):**

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
        }
        .header {
            background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
            color: white;
            padding: 20px;
            border-radius: 10px 10px 0 0;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            background: white;
            padding: 20px;
            border-radius: 0 0 10px 10px;
        }
        .field {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        .field:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: bold;
            color: #06b6d4;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .value {
            color: #333;
            font-size: 16px;
            word-wrap: break-word;
        }
        .message-box {
            background-color: #f0f9ff;
            border-left: 4px solid #06b6d4;
            padding: 15px;
            margin: 10px 0;
            border-radius: 4px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Form Submission</h1>
        </div>
        <div class="content">
            <p>You have received a new message from your portfolio contact form:</p>
            
            <div class="field">
                <div class="label">👤 From:</div>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">
                    <a href="mailto:{{from_email}}">{{from_email}}</a>
                </div>
            </div>
            
            <div class="field">
                <div class="label">📌 Subject:</div>
                <div class="value">{{subject}}</div>
            </div>
            
            <div class="field">
                <div class="label">💬 Message:</div>
                <div class="message-box">
                    <div class="value" style="white-space: pre-wrap;">{{message}}</div>
                </div>
            </div>
            
            <div class="footer">
                <p>This message was sent from your portfolio website contact form.</p>
                <p>Reply to: {{from_email}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## Steps to Create the Template in EmailJS:

### 1. **Go to Email Templates**
- Log in to https://dashboard.emailjs.com/
- Click on **Email Templates** in the sidebar

### 2. **Create New Template**
- Click **"Create New Template"**
- Name it: `portfolio_contact`

### 3. **Configure Template Settings**
- **Template Name:** `portfolio_contact`
- **Subject:** `New Contact Form Message - {{subject}}`

### 4. **Set Email Content**
- Copy the HTML template above
- Paste it in the **HTML** section (not the text version)

### 5. **Configure Email Recipients**
- **To Email:** {{to_email}} (or your email)
- **From Name:** Portfolio Contact Form
- **Reply To:** {{from_email}}

### 6. **Save Template**
- Click **"Save"**
- Note your **Template ID** (e.g., `template_xxxxx`)

---

## Environment Variables

Add to your `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=portfolio_contact
NEXT_PUBLIC_TO_EMAIL=your_email@gmail.com
```

---

## Template Variables Reference

These variables will be replaced with actual form data:

| Variable | Example | Description |
|----------|---------|-------------|
| `{{from_name}}` | John Doe | Name from form |
| `{{from_email}}` | john@example.com | Email from form |
| `{{subject}}` | Collaboration Inquiry | Subject from form |
| `{{message}}` | Full message text | Message body |
| `{{to_email}}` | your_email@gmail.com | Your receiving email |

---

## Testing the Template

1. In EmailJS dashboard, go to your template
2. Click **"Test It"**
3. Fill in sample data:
   - from_name: "Test User"
   - from_email: "test@example.com"
   - subject: "Test Subject"
   - message: "This is a test message"
   - to_email: "your_email@gmail.com"
4. Click **"Send Test Email"**
5. Check your inbox

---

## Troubleshooting

**Issue:** Template won't send
- ✓ Verify Gmail service is connected and has proper scopes
- ✓ Check all variables use correct names: `{{variable_name}}`
- ✓ Ensure template ID is correct

**Issue:** Emails go to spam
- ✓ Check SPF/DKIM settings in Gmail
- ✓ Use professional sending name instead of "noreply"
- ✓ Include unsubscribe link (optional)

**Issue:** Variables not replacing**
- ✓ Make sure variable names match exactly (case-sensitive)
- ✓ Use double curly braces: `{{variable}}`
- ✓ No spaces inside braces
