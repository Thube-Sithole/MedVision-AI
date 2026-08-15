from fastapi.middleware.cors import CORSMiddleware

from fastapi import FastAPI

from app.api.routes import router

from app.database.base import Base
from app.database.connection import engine

# Import models so SQLAlchemy registers them
from app.models.planning_case import PlanningCase

from app.api.imaging import router as imaging_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="MedVision AI",
    version="0.1.0",
    description="Cloud-native medical imaging platform for AI-assisted virtual surgical planning."
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(router)
app.include_router(imaging_router)