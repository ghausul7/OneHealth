import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Login() {
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const user = await login(role, email || "you@example.com");
    setLoading(false);
    navigate(user.role === "doctor" ? "/doctor" : "/patient");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>OneHealth</h1>
      <p>Sign in to access your records</p>

      <div style={{ marginBottom: 16 }}>
        <button type="button" onClick={() => setRole("patient")} style={{ fontWeight: role === "patient" ? "bold" : "normal" }}>
          Patient
        </button>
        <button type="button" onClick={() => setRole("doctor")} style={{ fontWeight: role === "doctor" ? "bold" : "normal" }}>
          Doctor
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <button disabled={loading}>{loading ? "Signing in…" : `Sign in as ${role}`}</button>
      </form>
    </div>
  );
}