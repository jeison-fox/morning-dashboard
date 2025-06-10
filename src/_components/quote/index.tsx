import { MdFormatQuote } from "react-icons/md";
import styles from "./styles.module.css";
import type { QuoteProps } from "@customTypes/quote";

export default function Quote({ initialQuoteInfo }: QuoteProps) {
  const { quoteAuthor: author, quoteText: text } = initialQuoteInfo;

  return (
    <article className={styles.quote} data-testid="quote">
      <MdFormatQuote className={styles.quoteIcon} />
      <p className={styles.quoteContent}>{text}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>
    </article>
  );
}

Quote.ErrorFallback = function QuoteError() {
  return (
    <article className={styles.quote} data-testid="quote-error">
      <p className={styles.quoteError}>Sorry, we couldn&apos;t load the quote right now.</p>
    </article>
  );
};
