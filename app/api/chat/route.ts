import { NextResponse } from 'next/server';
import { generateChatResponse } from '@/lib/gemini';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Create a prompt that includes context about GTarang Solutions
    const contextualPrompt = `
      You are the AI assistant for GTarang Solutions, a technology company specializing in consulting 
      services for Robotics, AI, Warehouse Automation, and Satellite Technology. Answer the 
      following query from a potential customer in a professional and helpful manner. 
      Keep your responses concise and focus on how GTarang Solutions can help.
      
      Customer query: ${message}
    `;

    const response = await generateChatResponse(contextualPrompt);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
} 