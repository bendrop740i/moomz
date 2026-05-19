// Minimal Gemini 1.5 Flash wrapper. Free tier: 15 RPM, 1500 RPD.
// API key from https://aistudio.google.com/app/apikey, env var GEMINI_API_KEY.

const ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

type GeminiPart = { text?: string };
type GeminiResponse = {
  candidates?: { content?: { parts?: GeminiPart[] } }[];
  promptFeedback?: { blockReason?: string };
};

export async function geminiJson<T>(
  prompt: string,
  opts: { temperature?: number; maxTokens?: number; schemaHint?: string } = {},
): Promise<T> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) throw new Error("GEMINI_API_KEY not set");

  const body = {
    contents: [
      {
        role: "user",
        parts: [
          {
            text: opts.schemaHint
              ? `${prompt}\n\nReturn ONLY valid JSON matching this shape, with no markdown fences:\n${opts.schemaHint}`
              : `${prompt}\n\nReturn ONLY valid JSON, no markdown fences.`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: opts.temperature ?? 1.0,
      maxOutputTokens: opts.maxTokens ?? 2048,
      responseMimeType: "application/json",
    },
    safetySettings: [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
    ],
  };

  const res = await fetch(`${ENDPOINT}?key=${encodeURIComponent(key)}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Gemini ${res.status}: ${text.slice(0, 400)}`);
  }

  const data = (await res.json()) as GeminiResponse;
  if (data.promptFeedback?.blockReason) {
    throw new Error(`Gemini blocked: ${data.promptFeedback.blockReason}`);
  }

  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  if (!text) throw new Error("Gemini returned empty content");

  // Strip ```json ... ``` if model ignored instructions
  const cleaned = text
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim();

  try {
    return JSON.parse(cleaned) as T;
  } catch (e) {
    throw new Error(`Gemini returned non-JSON: ${cleaned.slice(0, 300)}`);
  }
}
