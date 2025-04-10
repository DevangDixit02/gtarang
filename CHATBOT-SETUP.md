# GTarang AI Chatbot Setup Guide

This document explains how to set up and configure the Gemini AI-powered chatbot for your GTarang Solutions website.

## Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click on "Get API key" or "Create API key"
4. Copy your new API key

## Adding the API Key to Your Project

1. Open the `.env.local` file in your project root
2. Find the line with `NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here`
3. Replace `your_gemini_api_key_here` with your actual Gemini API key
4. Save the file

Example:
```
NEXT_PUBLIC_GEMINI_API_KEY=AIza1234yourActualAPIKey5678
```

## Configuring the Chatbot

The chatbot is already configured to:

- Appear as a floating chat button on all pages
- Provide responses relevant to GTarang Solutions' services
- Support basic formatting in responses

### Customizing the Prompt

If you want to modify how the chatbot responds, you can edit the contextual prompt in `app/api/chat/route.ts`. This prompt provides context to Gemini about your company and how it should respond.

### Styling Changes

The chatbot uses your website's color scheme by default. If you want to change the appearance:

- Edit the CSS classes in `app/components/ChatBot.tsx`
- The main color variables are defined in your `tailwind.config.js` file

## Usage Limits

The Gemini API has usage limits based on your plan:

- Free tier: Limited requests per minute/day
- Paid plans: Higher rate limits

Monitor your usage in the [Google AI Studio dashboard](https://makersuite.google.com/).

## Troubleshooting

If the chatbot isn't working properly:

1. Check your browser console for errors
2. Verify your API key is correct
3. Make sure you're not exceeding API rate limits
4. Check that the `.env.local` file is being loaded correctly

## Support

For issues with the chatbot implementation, please contact your developer.
For Gemini API issues, refer to the [Google Gemini AI documentation](https://ai.google.dev/docs). 