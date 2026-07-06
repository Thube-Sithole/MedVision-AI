from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func

from app.database.base import Base


class PlanningCase(Base):
    """
    Stores surgical planning case information for the
    MedVision-AI workflow.
    """

    __tablename__ = "planning_cases"
   
    id = Column(Integer, primary_key=True, index=True)

    case_number = Column(String(20), nullable=False, unique=True)

    patient_name = Column(String(100), nullable=False)

    surgeon_name = Column(String(100), nullable=False)

    hospital = Column(String(100), nullable=False)

    procedure = Column(String(100), nullable=False)

    imaging_type = Column(String(50), nullable=False, default="CT")

    dicom_folder = Column(Text, nullable=False)

    assigned_to = Column(String(100))

    status = Column(String(50), nullable=False, default="Assigned")

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )