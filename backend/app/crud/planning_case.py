from sqlalchemy.orm import Session

from app.models.planning_case import PlanningCase
from app.schemas.case_schema import (
    PlanningCaseCreate,
    PlanningCaseUpdate,
)

def create_case(db: Session, case: PlanningCaseCreate):
    db_case = PlanningCase(**case.model_dump())

    db.add(db_case)
    db.commit()
    db.refresh(db_case)

    return db_case

def get_cases(db: Session):
    return (
    db.query(PlanningCase)
    .order_by(PlanningCase.created_at.desc())
    .all()
)

def get_case(db: Session, case_id: int):
    return (
        db.query(PlanningCase)
        .filter(PlanningCase.id == case_id)
        .first()
    )


def update_case(
    db: Session,
    case_id: int,
    case_update: PlanningCaseUpdate,
):
    db_case = get_case(db, case_id)

    if not db_case:
        return None

    updates = case_update.model_dump(exclude_unset=True)

    for key, value in updates.items():
        setattr(db_case, key, value)

    db.commit()
    db.refresh(db_case)

    return db_case


def delete_case(db: Session, case_id: int):
    db_case = get_case(db, case_id)

    if not db_case:
        return None

    db.delete(db_case)
    db.commit()

    return db_case