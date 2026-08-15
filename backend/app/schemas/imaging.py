from pydantic import BaseModel


class StudySummary(BaseModel):
    study_id: str
    patient_name: str
    description: str
    modality: str

class InstanceSummary(BaseModel):
    index: int
    instance_number: int
    sop_instance_uid: str
    series_instance_uid: str