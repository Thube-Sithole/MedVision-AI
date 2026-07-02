from fastapi import FastAPI

app = FastAPI(
    title="MedVision AI",
    version="0.1.0",
    description="Cloud-native medical imaging platform for AI_assisted virtual surgical planning."
)

@app.get("/")
def root():
    return {
        "application": "MedVision AI",
        "version": "0.1.0",
        "status": "running"
    }