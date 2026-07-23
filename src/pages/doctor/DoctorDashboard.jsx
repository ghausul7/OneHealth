import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const [oneHealthId, setOneHealthId] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!oneHealthId.trim()) return;
    navigate(`/doctor/patient/${encodeURIComponent(oneHealthId.trim())}`);
  }

  return (
    <div>
      <h1>Find a Patient</h1>
      <p>Enter a patient's OneHealth ID to view their records.</p>

      <form onSubmit={handleSearch}>
        <input
          placeholder="OH-2026-XXXXX"
          value={oneHealthId}
          onChange={(e) => setOneHealthId(e.target.value)}
        />
        <button>Look up patient</button>
      </form>

      <p style={{ fontSize: 13, color: "#666", marginTop: 12 }}>
        Try <code>OH-2026-48213</code> for a demo record.
      </p>
    </div>
  );
}