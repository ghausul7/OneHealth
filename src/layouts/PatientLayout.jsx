import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function PatientLayout() {
  const { user, logout } = useAuth();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 200, background: "#123028", color: "#fff", padding: 20 }}>
        <h2 style={{ fontSize: 18 }}>OneHealth</h2>
        <p style={{ fontSize: 12, color: "#a9c2ae" }}>Patient</p>

        <nav style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 20 }}>
          <NavLink to="/patient" end style={{ color: "#fff" }}>Medical Timeline</NavLink>
          <NavLink to="/patient/upload" style={{ color: "#fff" }}>Upload Report</NavLink>
          <NavLink to="/patient/consent" style={{ color: "#fff" }}>Consent & Access</NavLink>
        </nav>

        <div style={{ marginTop: 40, fontSize: 12 }}>
          <p>{user?.name}</p>
          <button onClick={logout}>Log out</button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: 30 }}>
        <Outlet />
      </main>
    </div>
  );
}