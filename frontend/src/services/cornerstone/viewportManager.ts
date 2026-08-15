import type { StackViewport } from "@cornerstonejs/core";

let activeViewport: StackViewport | null = null;

/**
 * Stores the active viewport.
 */
export function setActiveViewport(
  viewport: StackViewport
): void {
  activeViewport = viewport;
}

/**
 * Returns the active viewport.
 */
export function getActiveViewport(): StackViewport {
  if (!activeViewport) {
    throw new Error("No active viewport.");
  }

  return activeViewport;
}