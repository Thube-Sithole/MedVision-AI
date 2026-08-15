from pathlib import Path

import pydicom
from pydicom.dataset import FileDataset

from app.config import settings
from app.schemas.imaging import StudySummary, InstanceSummary


class StudyDiscovery:
    def __init__(self):
        self.dataset_root = settings.dataset_root

    def exists(self) -> bool:
        return self.dataset_root.exists()

    def root(self) -> Path:
        return self.dataset_root

    def children(self) -> list[str]:
        if not self.exists():
            return []

        return sorted(
            child.name
            for child in self.dataset_root.iterdir()
            if child.is_dir()
        )

    def dicom_files(self) -> list[Path]:
        return sorted(self.dataset_root.rglob("*.dcm"))

    def metadata(self, dicom_path: Path) -> FileDataset:
        return pydicom.dcmread(
            dicom_path,
            stop_before_pixels=True,
        )

    def get_studies(self) -> list[StudySummary]:
        studies: dict[str, StudySummary] = {}

        files = self.dicom_files()

        print(f"Found {len(files)} DICOM files")

        for i, dicom_path in enumerate(files):

            if i % 1000 == 0:
                print(f"Reading {i}/{len(files)}")

            ds = self.metadata(dicom_path)

            study_uid = str(
                getattr(ds, "StudyInstanceUID", "Unknown")
            )

            if study_uid not in studies:
                studies[study_uid] = StudySummary(
                    study_id=study_uid,
                    patient_name=str(
                        getattr(ds, "PatientName", "Unknown")
                    ),
                    description=str(
                        getattr(ds, "StudyDescription", "")
                    ),
                    modality=str(
                        getattr(ds, "Modality", "")
                    ),
                )

        print(f"Returning {len(studies)} studies")

        return list(studies.values())

    def get_instances(self, study_id: str) -> list[InstanceSummary]:
        instances: list[InstanceSummary] = []

        for index, dicom_path in enumerate(self.dicom_files()):
            ds = self.metadata(dicom_path)

            if str(getattr(ds, "StudyInstanceUID", "")) != study_id:
                continue

            instances.append(
                InstanceSummary(
                    index=index,
                    instance_number=int(
                        getattr(ds, "InstanceNumber", index + 1)
                    ),
                    sop_instance_uid=str(
                        getattr(ds, "SOPInstanceUID", "")
                    ),
                    series_instance_uid=str(
                        getattr(ds, "SeriesInstanceUID", "")
                    ),
                )
            )

        instances.sort(
            key=lambda instance: instance.instance_number
        )

        return instances