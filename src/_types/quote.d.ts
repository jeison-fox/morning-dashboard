export interface QuoteResponse {
  quoteAuthor: string;
  quoteText: string;
}

export interface QuoteProps {
  initialQuoteInfo: QuoteResponse;
}
