import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "Coachify", // Unique app ID
  name: "Coachify",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});