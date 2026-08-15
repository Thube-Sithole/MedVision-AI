import type { StackViewport } from "@cornerstonejs/core";

import {
  initializeCornerstone,
  enableViewport,
  setActiveViewport,
} from "../cornerstone";
import { loadStack } from "./studyLoader";
import { getStudyImageIds } from "./studyDiscovery";

export async function initializeViewer({
  element,
}: {
  element: HTMLElement;
}): Promise<StackViewport> {
  await initializeCornerstone();;

  const viewport = enableViewport(element);
  setActiveViewport(viewport);

  const studyImageIds = await getStudyImageIds();
  
  await loadStack(viewport, studyImageIds);

  return viewport;
}