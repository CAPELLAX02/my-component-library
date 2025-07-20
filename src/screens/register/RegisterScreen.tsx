import { useState } from "react";
import { Mail } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextInput } from "@/components/auth/TextInput";
import { Button } from "@/components/ui/button";
import { AuthFooter } from "@/components/auth/AuthFooter";
import { Separator } from "@/components/ui/separator";
import { SocialButton } from "@/components/auth/SocialButton";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleContinue = () => {
        localStorage.setItem("email", email);
        navigate("/register/otp");
    };

    return (
        <AuthLayout
            title="Let’s get you started"
            subtitle="Enter the email address you’d like to use. We’ll send a verification code to confirm it's really you."
        >
            <div className="space-y-6">
                <TextInput
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    Icon={Mail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Button className="w-full" onClick={handleContinue}>
                    Continue
                </Button>

                <Separator />

                <SocialButton icon={FcGoogle}>Sign up with Google</SocialButton>

                <AuthFooter
                    text="Already have an account?"
                    link="/login"
                    linkText="Login"
                />
            </div>
        </AuthLayout>
    );
};
