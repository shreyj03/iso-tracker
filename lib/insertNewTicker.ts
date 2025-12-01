"use server";
import {Ticker} from "@/types";
import getCollection from "@/db";
import {TICKER_COLLECTION} from "@/db";

export default async function createNewAlias(url: string, ticker: string): Promise<Ticker> {
    console.log("Creating new alias");
    const a = {
        ticker: ticker,
    };

    const collection = await getCollection(TICKER_COLLECTION);
    const res = await collection.insertOne({...a})
    if (!res.acknowledged) {
        return { error: "Database insert failed." };
    }
    return { ...a, id: res.insertedId.toHexString() };
}