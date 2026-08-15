import type { StackViewport } from "@cornerstonejs/core";

export async function loadStack(
  viewport: StackViewport,
  imageIds: string[]
): Promise<void> {
  if (imageIds.length === 0) {
    throw new Error("No imageIds supplied.");
  }

  console.log(`📚 Loading ${imageIds.length} image(s)...`);
  console.log("First imageId:", imageIds[0]);
  console.log("➡️ Before setStack");

  try {
    await viewport.setStack(imageIds);

    console.log("✅ setStack succeeded");

    viewport.render();

    console.log("✅ Stack rendered");
  } catch (error) {
    console.error("❌ setStack failed");
    console.error(error);

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error(error.stack);
    }
  }
}