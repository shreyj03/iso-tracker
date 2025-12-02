"use server";
import {Ticker} from "@/types";
import getCollection from "@/db";
import {TICKER_COLLECTION} from "@/db";

export default async function insertNewTicker(ticker: string, score: string): Promise<Ticker> {
    const a = {
        ticker: ticker,
        IPO_Attractiveness_Score: score,
    };

    const collection = await getCollection(TICKER_COLLECTION);
    const res = await collection.insertOne({...a})
    if (!res.acknowledged) {
        return { error: "Database insert failed." };
    }
    return { ...a, id: res.insertedId.toHexString() };
}