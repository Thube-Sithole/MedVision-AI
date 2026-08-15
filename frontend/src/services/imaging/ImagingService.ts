import type { StackViewport } from "@cornerstonejs/core";

import { initializeCornerstone } from "../cornerstone";
import { enableViewport } from "../cornerstone/renderingEngine";

import { loadStack } from "./studyLoader";
import { getStudyImageIds } from "./studyDiscovery";

export class ImagingService {
  /**
   * Creates and initializes a Cornerstone viewport.
   */
  static async initializeViewport(
    element: HTMLDivElement
  ): Promise<StackViewport> {
    // Initialize Cornerstone
    await initializeCornerstone();

    // Enable viewport
    const viewport = enableViewport(element);

    console.log("🔍 Fetching study image IDs...");

    // Discover the CT study and build imageIds
    const imageIds = await getStudyImageIds();

    // Load the stack
    await loadStack(viewport, imageIds);

    return viewport;
  }
}