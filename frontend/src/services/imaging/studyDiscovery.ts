import {
  getStudies,
  getInstances,
  type InstanceSummary,
} from "../imagingApi";

import { createImageId } from "./imageIds";

function groupBySeries(
  instances: InstanceSummary[]
): InstanceSummary[][] {
  const map = new Map<string, InstanceSummary[]>();

  for (const instance of instances) {
    const series =
      map.get(instance.series_instance_uid) ?? [];

    series.push(instance);

    map.set(
      instance.series_instance_uid,
      series
    );
  }

  return [...map.values()];
}

export async function getStudyImageIds(): Promise<string[]> {
  console.log("📚 getStudyImageIds()");

  const studies = await getStudies();

  console.log("📚 Studies:", studies);

  const ctStudy = studies.find(
    study => study.modality === "CT"
  );

  if (!ctStudy) {
    throw new Error("No CT study found.");
  }

  console.log(
    "🩻 Selected CT study:",
    ctStudy.study_id
  );

  const instances = await getInstances(
    ctStudy.study_id
  );

  console.log(
    `🩻 Found ${instances.length} instances`
  );

  if (instances.length === 0) {
    throw new Error(
      "No instances found for CT study."
    );
  }

  const grouped = groupBySeries(instances);

  console.log(
    `🩻 Found ${grouped.length} series`
  );

  // Select the series containing the most instances.
  // For this CT demo, this should normally be the
  // main axial CT image series.
  const series = grouped.sort(
    (a, b) => b.length - a.length
  )[0];

  console.log(
    `🩻 Selected series with ${series.length} images`
  );

  series.sort(
    (a, b) =>
      a.instance_number - b.instance_number
  );

  const imageIds = series.map(instance =>
    createImageId(instance.index)
  );

  console.log(
    "🩻 First imageId:",
    imageIds[0]
  );

  console.log(
    "🩻 Last imageId:",
    imageIds[imageIds.length - 1]
  );

  return imageIds;
}