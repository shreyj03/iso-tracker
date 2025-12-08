"use server";

import OpenAI from "openai";
import { redirect } from "next/navigation";

// configure openai client with environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// handle form submission for ipo analysis
export async function analyzeIPO(formData: FormData) {
  // extract ticker symbol from form data
  const ticker = formData.get("ticker") as string;

  // validate that a ticker was provided
  if (!ticker) {
    throw new Error("Ticker is required");
  }

  // navigate to results page with ticker as query param to show loading state or results
  // In a real app, we might want to do this async and stream, but for now let's do a simple redirect 
  // and fetch data there, OR fetch here and pass data. 
  // Better pattern for Next.js: Pass data via URL or use a client component wrapper.
  // Let's keep it simple: redirect to /report/[ticker]
  
  // redirect user to the dynamic report page
  redirect(`/report/${ticker}`);
}

// core function to generate stock analysis using openai
export async function getIPOAnalysis(ticker: string) {
  // verify api key configuration
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OpenAI API key is not configured");
  }

    // define the prompt for the ai model
    const prompt = `You are a financial analyst specializing in IPOs and public equity.
    
    Target Ticker: ${ticker}

    Step 1: STRICTLY IDENTIFY the company associated with this ticker symbol. 
    - Verify the company name corresponds exactly to the ticker. 
    - If the ticker belongs to a recent IPO, prioritize that.
    - If the ticker is ambiguous (e.g., used on multiple exchanges), prefer the major US exchange (NYSE/NASDAQ) listing.
    
    Step 2: Craft an in-depth analysis of this SPECIFIC company's stock.
    Your analysis must include:
    - A clear, well-reasoned section outlining the potential advantages (pros) of the stock.
    - A distinct, well-reasoned section describing potential disadvantages (cons) of the stock.
    - A concise description of the company, its business model, and what it does.
    - A final quantifiable stock attractiveness score between 1 and 100, justified by your prior reasoning.

    Reflect step-by-step on all publicly available data relevant to THIS specific company. Consider financials, growth prospects, competitive landscape, sector trends, management team, risk factors, and market sentiment. 

    Structure your response as follows:
    - Company_Name: [The full legal name of the company]
    - Company_Description: [A 2-3 sentence summary of what the company does and its primary business model]
    - Pros: [Detailed bullet points with explanations, each grounded in specific data or well-accepted analysis]
    - Cons: [Detailed bullet points with explanations, each grounded in specific data or well-accepted analysis]
    - Score_justification: [Short paragraph justifying the attractiveness score with reference to your earlier reasoning]
    - IPO_Attractiveness_Score: [Integer from 1-100: higher is more attractive]

    Respond ONLY in the following JSON format (do not use a code block):

    {
      "Company_Name": "string",
      "Company_Description": "string",
      "Pros": [
        "string",
        "string"
      ],
      "Cons": [
        "string",
        "string"
      ],
      "Score_justification": "string",
      "IPO_Attractiveness_Score": number
    }`;

  try {
    // execute the completion request to openai
    // use gpt-4o model for better analysis quality
    const completion = await openai.chat.completions.create({
      model: "gpt-4o", 
      messages: [
        { role: "system", content: "You are a helpful financial analyst assistant. Output JSON only." },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" }, // enforce json response format
    });

    // extract content from the response
    const content = completion.choices[0].message.content;
    if (!content) throw new Error("No content returned from OpenAI");

    // parse the json response into an object
    return JSON.parse(content);
  } catch (error) {
    // log any errors during the process
    console.error("Error fetching stock analysis:", error);
    return null;
  }
}