from pydantic import BaseModel

class Case(BaseModel):
    surgeon: str
    procedure: str
    dicom_folder: str