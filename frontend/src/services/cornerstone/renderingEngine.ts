import {
  RenderingEngine,
  Enums,
  type Types,
  StackViewport,
} from "@cornerstonejs/core";

import {
  RENDERING_ENGINE_ID,
  VIEWPORT_ID,
} from "./constants";

let renderingEngine: RenderingEngine | null = null;

export function getRenderingEngine(): RenderingEngine {
  if (!renderingEngine) {
    renderingEngine = new RenderingEngine(
      RENDERING_ENGINE_ID
    );

    console.log("🩻 Rendering Engine Created");
  }

  return renderingEngine;
}

export function enableViewport(
  element: HTMLDivElement
): StackViewport {
  const renderingEngine = getRenderingEngine();

  const existingViewport =
    renderingEngine.getViewport(VIEWPORT_ID);

  if (existingViewport) {
    console.log("🩻 Reusing existing viewport");

    return existingViewport as StackViewport;
  }

  const viewportInput: Types.PublicViewportInput = {
    viewportId: VIEWPORT_ID,
    element,
    type: Enums.ViewportType.STACK,
  };

  renderingEngine.enableElement(viewportInput);

  console.log("🩻 Viewport Enabled");

  return renderingEngine.getViewport(
    VIEWPORT_ID
  ) as StackViewport;
}

export function disableViewport(): void {
  const renderingEngine = getRenderingEngine();

  const existingViewport =
    renderingEngine.getViewport(VIEWPORT_ID);

  if (!existingViewport) {
    return;
  }

  renderingEngine.disableElement(VIEWPORT_ID);

  console.log("🧹 Viewport Disabled");
}

export function resizeViewport(): void {
  const renderingEngine = getRenderingEngine();

  renderingEngine.resize(true, false);

  console.log("🩻 Viewport Resized");
}