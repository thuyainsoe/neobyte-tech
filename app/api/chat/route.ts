// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Fix: Using specific version number which is more stable
    const model = genAI.getGenerativeModel({
      model: "models/gemini-2.5-flash",
    });

    const systemPrompt = `
      You are a helpful customer support assistant for "Neobyte", an IT Solution & Hardware Store.
      
      Your Personality:
      - Friendly, Professional, and Concise.
      - You can reply in both English and Myanmar (Burmese).
      - If the user types "helloooo" or slangs, understand them and reply naturally.

      Your Knowledge Base:
      1. Services: We provide Web Development, Mobile Apps, and UI/UX Design.
      2. Store: We sell Keychron Keyboards, Logitech Mice, and Monitors.
      3. Contact: Phone 09-123456789, Email info@neobyte.com.
      4. Team: The founder of Neobyte is "Aung Htet Nay".
      
      Important:
      - If you don't know the answer, ask them to contact our support team.
      - Keep answers short.
    `;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "System Instruction: " + systemPrompt }],
        },
        {
          role: "model",
          parts: [
            { text: "Understood. I am ready to assist Neobyte customers." },
          ],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = result.response;
    const reply = response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini Error:", error);
    return NextResponse.json(
      {
        reply: "Sorry, I'm having trouble connecting to the server right now.",
      },
      { status: 500 },
    );
  }
}
