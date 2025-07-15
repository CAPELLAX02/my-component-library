import {Route, Routes, Navigate} from "react-router-dom";
import {LoginScreen} from "@/screens/LoginScreen.tsx";
import {RegisterScreen} from "@/screens/RegisterScreen.tsx";

function App() {
  return (
      <div className="w-full min-h-screen flex items-center justify-center">
          <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
          </Routes>
      </div>
  )
}

export default App
