// entry stored in database, containing id, ticker name and IPO score
export type Ticker = {
    id: string;
    ticker: string;
    IPO_Attractiveness_Score: string;
} | { error: string };