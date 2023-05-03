import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import PlayerDetail from "./pages/dashboard/playerDetail";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "./configs/axios-config";
import { LogOut } from "./redux/slices/auth-slice";

function App() {
  const { isSignIn, token } = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(token) {
      setAuthToken(token);
    } else {
      dispatch(LogOut())
    }
  },[])
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
