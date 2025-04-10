import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI SDK with API key
export const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

// Create a function to generate chat responses
export async function generateChatResponse(prompt: string) {
  try {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error('Error generating response:', error);
    return "I'm sorry, I encountered an error. Please try again later.";
  }
} 