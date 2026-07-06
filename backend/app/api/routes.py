from fastapi import APIRouter

from app.api.planning_case import router as planning_case_router

router = APIRouter()

router.include_router(planning_case_router)

@router.get("/")
def root():
    return {
        "application": "MedVision AI",
        "version": "0.1.0",
        "status": "running"
    }
router.include_router(planning_case_router)