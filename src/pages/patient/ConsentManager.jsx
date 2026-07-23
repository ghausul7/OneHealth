import { useEffect, useState } from "react";
import { fetchConsents } from "../../services/api";

export default function ConsentManager() {
  const [consents, setConsents] = useState(null);

  useEffect(() => {
    fetchConsents().then(setConsents);
  }, []);

  function approve(id) {
    setConsents((prev) => prev.map((c) => (c.id === id ? { ...c, status: "approved" } : c)));
  }

  function revoke(id) {
    setConsents((prev) => prev.map((c) => (c.id === id ? { ...c, status: "revoked" } : c)));
  }

  return (
    <div>
      <h1>Consent & Access</h1>
      <p>Doctors can only see your records after you approve them here.</p>

      {!consents && <p>Loading…</p>}

      {consents?.map((c) => (
        <div key={c.id} style={{ border: "1px solid #ccc", padding: 12, marginBottom: 10 }}>
          <p><strong>{c.doctorName}</strong> — {c.scope}</p>
          <p>Status: {c.status}</p>
          {c.status === "pending" && (
            <>
              <button onClick={() => approve(c.id)}>Approve</button>{" "}
              <button onClick={() => revoke(c.id)}>Deny</button>
            </>
          )}
          {c.status === "approved" && <button onClick={() => revoke(c.id)}>Revoke access</button>}
        </div>
      ))}
    </div>
  );
}