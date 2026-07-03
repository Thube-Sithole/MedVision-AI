from fastapi import APIRouter
from app.schemas.case import Case
from app.services.case_service import CaseService

router = APIRouter()

case_service = CaseService()

@router.get("/")
def root():
    return {
        "application": "MedVision AI",
        "version": "0.1.0",
        "status": "running"
    }

@router.post("/cases", response_model=Case)
def create_case(case: Case):
    return case_service.create_case(case)