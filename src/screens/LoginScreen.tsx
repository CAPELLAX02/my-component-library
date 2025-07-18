import { Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {AuthLayout} from "@/components/auth/AuthLayout.tsx";
import {TextInput} from "@/components/auth/TextInput.tsx";
import {PasswordInput} from "@/components/auth/PasswordInput.tsx";
import {SocialButton} from "@/components/auth/SocialButton.tsx";
import {AuthFooter} from "@/components/auth/AuthFooter.tsx";
import {useNavigate} from "react-router-dom";

export const LoginScreen = () => {
    const navigate = useNavigate();

    return (
        <AuthLayout
            title="Sign in to your account."
            subtitle="Welcome back! Please enter your credentials to sign in to your account."
        >
            <div className="space-y-6">
                <TextInput
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    Icon={Mail}
                />

                <PasswordInput id="password" />

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="text-sm text-gray-600">
                            Remember me
                        </Label>
                    </div>
                    <a href="#" className="text-sm text-primary hover:underline">
                        Forgot password?
                    </a>
                </div>

                <Button
                    className="w-full"
                    onClick={() => navigate("/home")}
                >
                    Login
                </Button>

                <Separator />

                <SocialButton icon={FcGoogle}>Sign in with Google</SocialButton>

                <AuthFooter
                    text="Don’t have an account?"
                    link="/register"
                    linkText="Register"
                />
            </div>
        </AuthLayout>
    );
}
