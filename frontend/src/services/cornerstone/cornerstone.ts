import * as cornerstone from "@cornerstonejs/core";
import { getRenderingEngine } from "./renderingEngine";

let initialized = false;

export async function initializeCornerstone() {
  if (initialized) {
    return;
  }

  console.log("🩻 Initializing Cornerstone3D...");
 
  await cornerstone.init();

  getRenderingEngine();

  initialized = true;

  console.log("✅ Cornerstone initialized");
}