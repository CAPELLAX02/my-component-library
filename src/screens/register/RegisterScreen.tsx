import { Mail } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { TextInput } from "@/components/auth/TextInput";
import { Button } from "@/components/ui/button";
import { AuthFooter } from "@/components/auth/AuthFooter";
import {Separator} from "@/components/ui/separator.tsx";
import {SocialButton} from "@/components/auth/SocialButton.tsx";
import {FcGoogle} from "react-icons/fc";

export const RegisterScreen = () => (
    <AuthLayout
        title="Create your account."
        subtitle="Create your "
    >
        <div className="space-y-6">
            {/* Email field */}
            <TextInput
                id="email"
                type="email"
                placeholder="you@example.com"
                Icon={Mail}
            />

            <Button className="w-full" asChild>
                {/* Routing to the next step */}
                <a href="/register/otp">Continue</a>
            </Button>

            <Separator />

            <SocialButton icon={FcGoogle}>
                Sign in with Google
            </SocialButton>

            {/* Login link */}
            <AuthFooter
                text="Already have an account?"
                link="/login"
                linkText="Login"
            />
        </div>
    </AuthLayout>
);
