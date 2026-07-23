import { useEffect, useState } from "react";
import { fetchPatientRecords } from "../../services/api";

export default function PatientDashboard() {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    fetchPatientRecords().then(setRecords);
  }, []);

  return (
    <div>
      <h1>Your Medical Timeline</h1>
      <p>Every report and prescription, in one place.</p>

      {!records && <p>Loading records…</p>}

      {records?.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{r.title}</strong>
            <span>{r.date}</span>
          </div>
          <p style={{ fontSize: 13, color: "#555" }}>{r.type} · {r.doctor}</p>
          <p><strong>AI summary:</strong> {r.aiSummary}</p>
        </div>
      ))}
    </div>
  );
}