/**
 * Fetches data from a URL and returns the parsed JSON response, or null if the request fails
 * @param url - The URL to fetch from
 * @param options - Optional fetch options
 * @returns Promise that resolves to the parsed JSON response of type T, or null if the request fails
 */
export async function fetchOrNull<T>(url: string, options?: RequestInit): Promise<T | null> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";

    if (process.env.NODE_ENV !== "test") {
      console.log(errorMessage);
    }

    return null;
  }
}

/**
 * Gets the base URL for the application, using either the Vercel URL or a configured base URL
 * @returns The base URL string for the application
 */
export function getBaseUrl(): string {
  const baseURL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.NEXT_PUBLIC_BASE_URL!;
  return baseURL;
}
