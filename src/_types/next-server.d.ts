import "next/server";

declare module "next/server" {
  interface NextRequest {
    geo?: {
      city?: string;
      region?: string;
      country?: string;
      latitude?: number;
      longitude?: number;
    };
  }
}
