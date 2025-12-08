"use server";
import {Ticker} from "@/types";
import getCollection from "@/db";
import {TICKER_COLLECTION} from "@/db";

// insert one ticker entry into the database
export default async function insertNewTicker(ticker: string, score: string): Promise<Ticker> {
    // build the new entry
    const a = {
        ticker: ticker,
        IPO_Attractiveness_Score: score,
    };

    // inserting the entry
    const collection = await getCollection(TICKER_COLLECTION);
    const res = await collection.insertOne({...a})
    // throw an error if fails to insert

    if (!res.acknowledged) {
        return {error: "Database insert failed."};
    }
    return {...a, id: res.insertedId.toHexString()};
}