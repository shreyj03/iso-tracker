export type Ticker = {
    id: string;
    ticker: string;
    IPO_Attractiveness_Score: string;
} | { error: string };