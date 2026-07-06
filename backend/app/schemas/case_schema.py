from datetime import datetime

from pydantic import BaseModel


class PlanningCaseBase(BaseModel):
    case_number: str
    patient_name: str
    surgeon_name: str
    hospital: str
    procedure: str
    imaging_type: str
    dicom_folder: str
    assigned_to: str | None = None
    status: str = "Received"


class PlanningCaseCreate(PlanningCaseBase):
    pass


class PlanningCaseUpdate(BaseModel):
    patient_name: str | None = None
    surgeon_name: str | None = None
    hospital: str | None = None
    procedure: str | None = None
    imaging_type: str | None = None
    dicom_folder: str | None = None
    assigned_to: str | None = None
    status: str | None = None


class PlanningCaseResponse(PlanningCaseBase):
    id: int
    created_at: datetime
    updated_at: datetime

    model_config = {
        "from_attributes": True
    }