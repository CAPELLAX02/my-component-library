import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <p className="text-sm text-gray-500 mb-6">Welcome back! Please enter your credentials.</p>

                {/* Form alanı buraya eklenecek */}
                <div className="space-y-4">
                    {/* Placeholder için buton */}
                    <Button className="w-full" variant="default">Login</Button>
                </div>

                <p className="mt-6 text-sm text-center text-gray-500">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    )
}
