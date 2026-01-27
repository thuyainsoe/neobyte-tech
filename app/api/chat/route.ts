// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Derive the site base URL from the request so links work in both dev and production
    const siteUrl = new URL(req.url).origin;

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
  1. Services: We provide Web Development, Mobile Apps, UI/UX Design, and Digital Marketing.
  2. Store: We sell Keychron Keyboards, Logitech Mice, and Monitors.
  3. Contact: Phone 09-123456789, Email info@neobyte.com.
  4. Team: The founder of Neobyte is "Aung Htet Nay".

  Website Navigation Guide:
  The website base URL is: ${siteUrl}
  When users ask where to find something, guide them to the correct page using these full URLs:
  - ${siteUrl}/about
  - ${siteUrl}/services
  - ${siteUrl}/store
  - ${siteUrl}/store/[id] (e.g. ${siteUrl}/store/1)
  - ${siteUrl}/cart
  - ${siteUrl}/our-work
  - ${siteUrl}/blogs
  - ${siteUrl}/contact

  Navigation Instructions:
  - If a user asks "where can I buy items?" or "how to find products?", direct them to the Store page URL.
  - If a user asks about pricing or wants to shop, direct them to the Store page URL.
  - If a user asks to see their cart or checkout, direct them to the Cart page URL.
  - If a user asks "what do you do?" or about services, direct them to the Services page URL.
  - If a user asks about past projects or portfolio, direct them to the Our Work page URL.
  - If a user wants to read articles or blog posts, direct them to the Blogs page URL.
  - If a user wants to contact, collaborate, or hire us, direct them to the Contact page URL.
  - If a user asks about the company or who we are, direct them to the About page URL.
  
  IMPORTANT LINK FORMATTING:
  - Do NOT use markdown links like [Page Name](url). Use the raw URL directly.
  - Example: "You can check our products here: ${siteUrl}/store" (Do not hide the link).
  - Always use the full absolute URLs starting with "${siteUrl}".

  Important:
  - If you don't know the answer, ask them to contact our support team at ${siteUrl}/contact.
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
