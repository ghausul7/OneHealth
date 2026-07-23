import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPatientByOneHealthId } from "../../services/api";

export default function PatientRecordView() {
  const { oneHealthId } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetchPatientByOneHealthId(oneHealthId).then(setPatient);
  }, [oneHealthId]);

  if (!patient) return <p>Loading patient record…</p>;

  return (
    <div>
      <Link to="/doctor">← Back to search</Link>
      <h1>{patient.name}</h1>
      <p>{patient.oneHealthId} · {patient.age} yrs · {patient.bloodGroup}</p>

      {patient.allergies?.length > 0 && (
        <div style={{ background: "#fdecea", padding: 10, marginBottom: 16 }}>
          <strong>Allergies:</strong> {patient.allergies.join(", ")}
        </div>
      )}

      <h2 style={{ fontSize: 16 }}>Medical timeline</h2>
      {patient.records.map((r) => (
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