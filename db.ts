import {MongoClient, Db, Collection} from "mongodb";

// reading mongodb uri from .env.local
const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
    throw new Error("MONGO_URI environment variable is undefined");
}

// finding/creating the collection on mongodb
const DB_NAME = "ticker"
export const TICKER_COLLECTION = "ticker-collection"

let client: MongoClient | null = null;
let db: Db | null = null;

// connect to the database
async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGODB_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

// get the collection of tickers
export default async function getCollection(collectionName: string): Promise<Collection> {
    if (!db) {
        db = await connect();
    }

    return db.collection(collectionName);
}