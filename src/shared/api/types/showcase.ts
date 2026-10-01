/** A closed cycle published to the showcase (FR-9.6). */
export interface ShowcaseDto {
  id: string;
  title: string;
  description: string;
  /** ISO 8601 date the cycle was closed. */
  closedAt: string;
}
