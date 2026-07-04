from fastapi import FastAPI

from app.api.routes import router

from app.database.base import Base
from app.database.connection import engine

# Import models so SQLAlchemy registers them
from app.models.planning_case import PlanningCase

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="MedVision AI",
    version="0.1.0",
    description="Cloud-native medical imaging platform for AI-assisted virtual surgical planning."
)
app.include_router(router)