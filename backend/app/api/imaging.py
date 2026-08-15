from fastapi import APIRouter

from app.config import settings

from app.imaging.discovery import StudyDiscovery

from fastapi.responses import FileResponse

from fastapi import HTTPException

from app.schemas.imaging import StudySummary, InstanceSummary

import pydicom

router = APIRouter(
    prefix="/imaging",
    tags=["Imaging"],
)


@router.get("/health")
def imaging_health():
    return {
        "status": "ok",
        "service": "imaging",
    }


@router.get("/config")
def imaging_config():
    return {
        "dataset_root": str(settings.dataset_root),
        "exists": settings.dataset_root.exists(),
    }

@router.get("/dataset")
def dataset():
    discovery = StudyDiscovery()

    return {
        "exists": discovery.exists(),
        "root": str(discovery.root()),
        "children": discovery.children(),
    }

@router.get("/dicom")
def dicom_files():

    discovery = StudyDiscovery()

    files = discovery.dicom_files()

    return {
        "count": len(files),
        "first": str(files[0]) if files else None,
    }

@router.get("/dicom/{index}")
def dicom(index: int):

    discovery = StudyDiscovery()

    files = discovery.dicom_files()

    if index < 0 or index >= len(files):
        raise HTTPException(
            status_code=404,
            detail="DICOM file not found.",
        )

    dicom_path = files[index]

    # Temporary DICOM diagnostic
    ds = pydicom.dcmread(
        dicom_path,
        stop_before_pixels=False,
    )

    print("\n========== DICOM DEBUG ==========")
    print(f"Index: {index}")
    print(f"File: {dicom_path}")
    print(f"SOP Class UID: {getattr(ds, 'SOPClassUID', 'N/A')}")
    print(f"Modality: {getattr(ds, 'Modality', 'N/A')}")
    print(f"Rows: {getattr(ds, 'Rows', 'N/A')}")
    print(f"Columns: {getattr(ds, 'Columns', 'N/A')}")
    print(f"Transfer Syntax: {ds.file_meta.TransferSyntaxUID}")
    print(
        f"Photometric Interpretation: "
        f"{getattr(ds, 'PhotometricInterpretation', 'N/A')}"
    )
    print(f"Has PixelData: {'PixelData' in ds}")
    
    if "PixelData" in ds:
        print(f"PixelData length: {len(ds.PixelData)}")
    else:
        print("PixelData length: 0")

    print("=================================\n")

    return FileResponse(
        path=dicom_path,
        media_type="application/dicom",
        filename=dicom_path.name,
    )

@router.get(
    "/studies",
    response_model=list[StudySummary],
)
def get_studies():
    return StudyDiscovery().get_studies()

@router.get(
    "/studies/{study_id}/instances",
    response_model=list[InstanceSummary],
)
def get_instances(study_id: str):
    return StudyDiscovery().get_instances(study_id)