import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import PlayerDetail from "./pages/dashboard/playerDetail";
import "./style.css"
import { useSelector } from "react-redux";

function App() {
  const { isSignIn } = useSelector(store=>store.auth)
  return (
    <Routes>
      {!isSignIn ? (
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
