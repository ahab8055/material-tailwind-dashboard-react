import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import PlayerDetail from "./pages/dashboard/playerDetail";
import { useEffect, useState } from "react";
import "./style.css"

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    let token = localStorage.getItem("token");
    setToken(token);
  }, []);

  return (
    <Routes>
      {!token ? (
        <>
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
        </>
      ) : (
        <>
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/player/:id" element={<PlayerDetail />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </>
      )}
    </Routes>
  );
}

export default App;
