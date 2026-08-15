const BASE_URL = "http://127.0.0.1:8000";

/**
 * Builds a Cornerstone imageId from a DICOM instance endpoint.
 */
export function createImageId(index: number): string {
  return `wadouri:${BASE_URL}/imaging/dicom/${index}`;
}