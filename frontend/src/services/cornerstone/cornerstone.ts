import * as cornerstone from "@cornerstonejs/core";
import { RenderingEngine } from "@cornerstonejs/core";

import {
  RENDERING_ENGINE_ID,
} from "./constants";

import { initializeDicomLoader } from "../imaging/dicomLoader";

import { init as cornerstoneToolsInit } from "@cornerstonejs/tools";

let initialized = false;
let renderingEngine: RenderingEngine | null = null;

export async function initializeCornerstone() {
  if (initialized) {
    return;
  }

  console.log("🩻 Initializing Cornerstone3D...");

  // Initialize Cornerstone core
  await cornerstone.init();

  // Initialize Cornerstone Tools
  cornerstoneToolsInit();

  console.log("🛠️ Cornerstone Tools initialized");

  // Initialize DICOM loader
  initializeDicomLoader();

  // Create rendering engine
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