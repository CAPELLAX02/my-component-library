import { useState } from "react";
import { Mail } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextInput } from "@/components/auth/TextInput";
import { Button } from "@/components/ui/button";
import { AuthFooter } from "@/components/auth/AuthFooter";
import { Separator } from "@/components/ui/separator";
import { SocialButton } from "@/components/auth/SocialButton";
import { FcGoogle } from "react-icons/fc";
import {useNavigate} from "react-router-dom";

export const RegisterScreen = () => {
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate();

    const handleContinue = (email: string) => {
        localStorage.setItem("email", email);
        navigate("/register/otp");
    };

    return (
        <AuthLayout title="Create your account." subtitle="Let’s start with your email.">
            <div className="space-y-6">
                {/* Email field */}
                <TextInput
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    Icon={Mail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Button
                    className="w-full"
                    onClick={() => handleContinue(email)}
                >
                    Continue
                </Button>

                <Separator />

                <SocialButton icon={FcGoogle}>
                    Sign in with Google
                </SocialButton>

                <AuthFooter
                    text="Already have an account?"
                    link="/login"
                    linkText="Login"
                />
            </div>
        </AuthLayout>
    );
};
