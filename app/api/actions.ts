"use server";

import { redirect } from "next/navigation";

export async function analyzeIPO(formData: FormData) {
  const ticker = formData.get("ticker") as string;

  if (!ticker) {
    throw new Error("Ticker is required");
  }
  
  redirect(`/report/${ticker}`);
}

