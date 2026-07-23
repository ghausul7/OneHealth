import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import PatientLayout from "./layouts/PatientLayout.jsx";
import PatientDashboard from "./pages/patient/PatientDashboard.jsx";
import UploadReport from "./pages/patient/UploadReport.jsx";
import ConsentManager from "./pages/patient/ConsentManager.jsx";
import DoctorLayout from "./layouts/DoctorLayout.jsx";
import DoctorDashboard from "./pages/doctor/DoctorDashboard.jsx";
import PatientRecordView from "./pages/doctor/PatientRecordView.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/patient"
        element={
          <ProtectedRoute role="patient">
            <PatientLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<PatientDashboard />} />
        <Route path="upload" element={<UploadReport />} />
        <Route path="consent" element={<ConsentManager />} />
      </Route>

      <Route
        path="/doctor"
        element={
          <ProtectedRoute role="doctor">
            <DoctorLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DoctorDashboard />} />
        <Route path="patient/:oneHealthId" element={<PatientRecordView />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}