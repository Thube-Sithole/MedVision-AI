import type { StackViewport } from "@cornerstonejs/core";

import { initializeCornerstone } from "../cornerstone";
import { enableViewport } from "../cornerstone/renderingEngine";

import { loadStack } from "./studyLoader";
import { getStudyImageIds } from "./studyDiscovery";

import { initializeTools } from "../cornerstone/tools";

export class ImagingService {
  /**
   * Creates and initializes a Cornerstone viewport.
   */
  static async initializeViewport(
    element: HTMLDivElement
  ): Promise<StackViewport> {
    // 1. Initialize Cornerstone
    await initializeCornerstone();

    // 2. Enable viewport
    const viewport = enableViewport(element);

    console.log("🔍 Fetching study image IDs...");

    // 3. Discover the CT study and build imageIds
    const imageIds = await getStudyImageIds();

    // 4. Load the CT stack
    await loadStack(viewport, imageIds);

    // 5. ONLY activate tools after images exist
    initializeTools();

    console.log("✅ Imaging viewport fully initialized");

    return viewport;
  }
}