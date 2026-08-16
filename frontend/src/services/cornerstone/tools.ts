import {
  addTool,
  ToolGroupManager,
  Enums,
  StackScrollTool,
  ZoomTool,
  type Types,
} from "@cornerstonejs/tools";

import {
  RENDERING_ENGINE_ID,
  VIEWPORT_ID,
} from "./constants";
import { add } from "@cornerstonejs/tools/utilities/contourSegmentation/logicalOperators";

const TOOL_GROUP_ID = "MEDVISION_TOOL_GROUP";

let toolGroup: Types.IToolGroup | null = null;

export function initializeTools(): void {
  if (toolGroup) {
    console.log("🛠️ Tools already initialized");
    return;
  }

  console.log("🛠️ Initializing Cornerstone tools...");

  // Register the tool
  addTool(StackScrollTool);
  addTool(ZoomTool);

  // Create tool group
  toolGroup = ToolGroupManager.createToolGroup(
    TOOL_GROUP_ID
  );

  if (!toolGroup) {
    throw new Error(
      "Failed to create Cornerstone tool group."
    );
  }

  // Add StackScrollTool
  toolGroup.addTool(StackScrollTool.toolName);
  toolGroup.addTool(ZoomTool.toolName);

  // Attach viewport
  toolGroup.addViewport(
    VIEWPORT_ID,
    RENDERING_ENGINE_ID
  );

  // Activate stack scrolling with mouse wheel
toolGroup.setToolActive(
  StackScrollTool.toolName,
  {
    bindings: [
      {
        mouseButton: Enums.MouseBindings.Wheel,
      },
    ],
  }
);

// Activate zoom with right mouse button
toolGroup.setToolActive(
  ZoomTool.toolName,
  {
    bindings: [
      {
        mouseButton:
          Enums.MouseBindings.Secondary,
      },
    ],
  }
);

console.log(
  "🎯 StackScrollTool mode:",
  toolGroup.getToolInstance(StackScrollTool.toolName)?.mode
);

console.log(
  "🎯 StackScrollTool instance:",
  toolGroup.getToolInstance(StackScrollTool.toolName)
);

console.log("✅ Stack scroll tool initialized");
console.log("🎯 Viewport registered:", VIEWPORT_ID);
console.log("🖱️ Mouse wheel → slice scrolling");
console.log("🔍 Right mouse drag → zoom");
}