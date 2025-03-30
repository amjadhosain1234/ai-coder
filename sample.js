import 'dotenv/config';
import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is correctly set
});

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: "Hello, GPT-4o!" }],
  });

  console.log(response.choices[0].message.content);
}

main();
