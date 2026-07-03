from app.schemas.case import Case


class CaseService:

    def create_case(self, case: Case):
        return case