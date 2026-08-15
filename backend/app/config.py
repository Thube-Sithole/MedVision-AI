from pathlib import Path
import os

from dotenv import load_dotenv

load_dotenv()


class Settings:
    def __init__(self):
        self.database_url = os.getenv("DATABASE_URL")

        self.dataset_root = Path(
            os.getenv("DATASET_ROOT", "")
        )


settings = Settings()