export interface PlanningCase {
    id: number;
    patient_name: string;
    surgeon: string;
    procedure: string;
    status: string;
    assigned_to?: string;
    created_at: string;
}