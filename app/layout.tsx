import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Context Cost Predictor – Predict AI Costs Before Execution",
  description: "Analyze prompt templates and context data to predict token usage and costs across OpenAI, Anthropic, and Google AI before running."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="67dda897-e270-470c-9dca-0159b7964a77"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
