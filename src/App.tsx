import {Navigate, Route, Routes} from "react-router-dom";
import {LoginScreen} from "@/screens/LoginScreen.tsx";
import {RegisterScreen} from "@/screens/register/RegisterScreen.tsx";
import {BuildProfileScreen} from "@/screens/register/BuildProfileScreen.tsx";
import {ActivationScreen} from "@/screens/register/ActivationScreen.tsx";
import {SetUpPasswordScreen} from "@/screens/register/SetUpPasswordScreen.tsx";
import {HomeScreen} from "@/screens/HomeScreen.tsx";
import {CreateNicknameScreen} from "@/screens/register/CreateNicknameScreen.tsx";

export default function App() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/register/otp" element={<ActivationScreen />} />
                <Route path="/register/password" element={<SetUpPasswordScreen />} />
                <Route path="/register/profile" element={<BuildProfileScreen />} />
                <Route path="/register/nickname" element={<CreateNicknameScreen />} />
                <Route path="/home" element={<HomeScreen />} />
            </Routes>
        </div>
    )
}