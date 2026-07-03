from fastapi import FastAPI

from app.api.routes import router

app = FastAPI(
    title="MedVision AI",
    version="0.1.0",
    description="Cloud-native medical imaging platform for AI-assisted virtual surgical planning."
)
app.include_router(router)