import * as cornerstoneDICOMImageLoader from "@cornerstonejs/dicom-image-loader";

let initialized = false;

export function initializeDicomLoader() {
  if (initialized) {
    console.log("🩻 DICOM Loader already initialized");
    return;
  }

  console.log("🩻 Initializing DICOM Loader...");

  cornerstoneDICOMImageLoader.init({
    maxWebWorkers: 1,
    useLegacyMetadataProvider: true,
  });

  initialized = true;

  console.log("✅ DICOM Loader initialized");
}