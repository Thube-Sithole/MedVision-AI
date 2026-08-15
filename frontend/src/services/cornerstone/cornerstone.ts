import * as cornerstone from "@cornerstonejs/core";

import {
  RenderingEngine,
} from "@cornerstonejs/core";

import {
  RENDERING_ENGINE_ID,
  VIEWPORT_ID,
} from "./constants";

import { initializeDicomLoader } from "../imaging/dicomLoader";

let initialized = false;
let renderingEngine: RenderingEngine | null = null;

export async function initializeCornerstone() {
  if (initialized) {
    return;
  }

  console.log("🩻 Initializing Cornerstone3D...");

  await cornerstone.init();

  initializeDicomLoader();

  getRenderingEngine();

  initialized = true;

  console.log("✅ Cornerstone initialized");
}

export function getRenderingEngine(): RenderingEngine {
  if (!renderingEngine) {
    renderingEngine = new RenderingEngine(
      RENDERING_ENGINE_ID
    );

    console.log("🩻 Rendering Engine Created");
  }

  return renderingEngine;
}