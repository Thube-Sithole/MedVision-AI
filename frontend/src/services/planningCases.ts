import axios from "axios";
import type { PlanningCase } from "../types/planningCase";

const api = axios.create({
    baseURL: "http://localhost:8000",
});

export async function getPlanningCases(): Promise<PlanningCase[]> {
    const response = await api.get("/planning-cases");
    return response.data;
}