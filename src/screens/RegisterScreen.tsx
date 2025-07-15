import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-4">Register</h1>
                <p className="text-sm text-gray-500 mb-6">Create your account to get started.</p>

                <div className="space-y-4">
                    <Button className="w-full" variant="default">Register</Button>
                </div>

                <p className="mt-6 text-sm text-center text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    )
}
