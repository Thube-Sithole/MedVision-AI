from pydantic import BaseModel


class CaseSchema(BaseModel):
    case_number: str
    patient_name: str
    surgeon_name: str
    hospital: str
    procedure: str
    imaging_type: str
    dicom_folder: str
    assigned_designer: str | None = None