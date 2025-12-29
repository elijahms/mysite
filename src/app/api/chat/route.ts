import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';
import { resumeData } from '@/lib/resume-data';

// Initialize OpenAI client compatible with xAI
const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY || 'dummy-key-for-build',
  baseURL: "https://api.x.ai/v1",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `
      You are an AI assistant for Elijah Silverman's personal portfolio website.
      Your role is to answer questions about Elijah based *strictly* on the following data.
      Be friendly, professional, and slightly witty (but professional).
      If the user asks something not in the data, politely say you don't know but suggest they contact Elijah directly.
      
      Elijah's Data:
      ${JSON.stringify(resumeData, null, 2)}
    `;

    const response = await client.chat.completions.create({
      model: "grok-beta",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      stream: false,
    });

    return NextResponse.json({ 
      result: response.choices[0].message.content 
    });

  } catch (error) {
    console.error('Error calling xAI:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
