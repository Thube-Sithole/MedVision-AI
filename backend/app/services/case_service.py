from app.database.session import SessionLocal
from app.models.planning_case import PlanningCase
from app.schemas.case_schema import CaseSchema


class CaseService:

    def create_case(self, case: CaseSchema):

        db = SessionLocal()

        db_case = PlanningCase(
            case_number=case.case_number,
            patient_name=case.patient_name,
            surgeon_name=case.surgeon_name,
            hospital=case.hospital,
            procedure=case.procedure,
            imaging_type=case.imaging_type,
            dicom_folder=case.dicom_folder,
            assigned_designer=case.assigned_designer,
        )

        db.add(db_case)
        db.commit()
        db.refresh(db_case)

        db.close()

        return db_case