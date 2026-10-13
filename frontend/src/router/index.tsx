
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portfolio from "../pages/Portfolio";
import Dashboard from "../pages/Dashboard";
import PlanningCases from "../pages/PlanningCases";
import PlanningWorkspace from "../pages/PlanningWorkspace";
import MedVisionLanding from "../pages/MedVisionLanding/MedVisionLanding";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route
          path="/medvision"
          element={<MedVisionLanding />}
        />

        <Route
          path="/medvision/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/medvision/cases"
          element={<PlanningCases />}
        />

        <Route
          path="/medvision/workspace"
          element={<PlanningWorkspace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
