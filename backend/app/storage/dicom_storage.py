from pathlib import Path


class DicomStorage:

    def __init__(self):
        self.base_path = Path("storage") / "dicom"

    def create_case_workspace(self, case_number: str, year: int):

        workspace = self.base_path / str(year) / case_number

        folders = [
            workspace / "dicom",
            workspace / "segmentation",
            workspace / "models",
            workspace / "reports",
            workspace / "exports",
        ]

        for folder in folders:
            folder.mkdir(parents=True, exist_ok=True)

        return workspace