const API_BASE = "http://127.0.0.1:8000/imaging";

export interface StudySummary {
  study_id: string;
  patient_name: string;
  description: string;
  modality: string;
}

export interface InstanceSummary {
  index: number;
  instance_number: number;
  sop_instance_uid: string;
  series_instance_uid: string;
}

export async function getStudies(): Promise<StudySummary[]> {
  console.log("5️⃣ Calling GET /imaging/studies");

  const response = await fetch(`${API_BASE}/studies`);

  console.log("5️⃣ Response:", response.status);

  if (!response.ok) {
    throw new Error("Failed to fetch studies");
  }

  return response.json();
}

export async function getInstances(
  studyId: string
): Promise<InstanceSummary[]> {

  console.log(`6️⃣ Calling GET /imaging/studies/${studyId}/instances`);

  const response = await fetch(
    `${API_BASE}/studies/${studyId}/instances`
  );

  console.log("6️⃣ Response:", response.status);

  if (!response.ok) {
    throw new Error("Failed to fetch instances");
  }

  return response.json();
}