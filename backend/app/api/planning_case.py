from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.crud import planning_case as crud
from app.database.session import get_db
from app.schemas.case_schema import (
    PlanningCaseCreate,
    PlanningCaseUpdate,
)

router = APIRouter(
    prefix="/cases",
    tags=["Planning Cases"],
)


@router.post("/", response_model=PlanningCaseUpdate)
def create_case(
    case: PlanningCaseCreate,
    db: Session = Depends(get_db),
):
    return crud.create_case(db, case)


@router.get("/", response_model=list[PlanningCaseUpdate])
def get_cases(
    db: Session = Depends(get_db),
):
    return crud.get_cases(db)


@router.get("/{case_id}", response_model=PlanningCaseUpdate)
def get_case(
    case_id: int,
    db: Session = Depends(get_db),
):
    case = crud.get_case(db, case_id)

    if not case:
        raise HTTPException(
            status_code=404,
            detail="Planning case not found",
        )

    return case


@router.put("/{case_id}", response_model=PlanningCaseUpdate)
def update_case(
    case_id: int,
    case_update: PlanningCaseUpdate,
    db: Session = Depends(get_db),
):
    case = crud.update_case(
        db,
        case_id,
        case_update,
    )

    if not case:
        raise HTTPException(
            status_code=404,
            detail="Planning case not found",
        )

    return case


@router.delete("/{case_id}")
def delete_case(
    case_id: int,
    db: Session = Depends(get_db),
):
    case = crud.delete_case(db, case_id)

    if not case:
        raise HTTPException(
            status_code=404,
            detail="Planning case not found",
        )

    return {
        "message": "Planning case deleted successfully"
    }