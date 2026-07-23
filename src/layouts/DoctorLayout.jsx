import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function DoctorLayout() {
  const { user, logout } = useAuth();

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 200, background: "#123028", color: "#fff", padding: 20 }}>
        <h2 style={{ fontSize: 18 }}>OneHealth</h2>
        <p style={{ fontSize: 12, color: "#a9c2ae" }}>Doctor</p>

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