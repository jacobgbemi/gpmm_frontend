/**
 * Shared API types.
 * Feature-specific contracts will be added in later phases
 * according to docs/api-specification.md.
 */

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type HealthResponse = {
  status: string;
  version?: string;
  timestamp?: string;
};
