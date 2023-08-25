import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LoginPage from "./pages/LoginPage";
import RegisterForm from "./components/Register";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setToken(authToken);
  }, []);

  const authenticatedRoutes = (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Navigate to="/" />} />
    </>
  );

  const unauthenticatedRoutes = (
    <>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/profile" element={<Navigate to="/" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        {token ? authenticatedRoutes : unauthenticatedRoutes}
        <Route
          path="*"
          element={token ? <Navigate to="/" /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
