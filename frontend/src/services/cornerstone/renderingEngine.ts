import {
  RenderingEngine,
  Enums,
  type Types,
} from "@cornerstonejs/core";

import {
  RENDERING_ENGINE_ID,
  VIEWPORT_ID,
} from "./constants";

let renderingEngine: RenderingEngine | null = null;

export function getRenderingEngine() {
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
) {
  const renderingEngine = getRenderingEngine();

  const viewportInput: Types.PublicViewportInput = {
    viewportId: VIEWPORT_ID,
    element,
    type: Enums.ViewportType.STACK,
  };

  renderingEngine.enableElement(viewportInput);

  console.log("🩻 Viewport Enabled");
}