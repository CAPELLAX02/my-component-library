import { User, Mail } from "lucide-react";
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

export const RegisterScreen = () => (
    <AuthLayout
        title="Create your account."
        subtitle="Join us by filling out the information below."
    >
        <div className="space-y-6">
            <TextInput id="name" placeholder="John Doe" Icon={User} />

            <TextInput
                id="email"
                type="email"
                placeholder="you@example.com"
                Icon={Mail}
            />

            <PasswordInput id="password" />

            <PasswordInput id="confirm" placeholder="Repeat password" />

            {/* Terms */}
            <div className="flex items-start gap-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-snug">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                    </a>
                    .
                </Label>
            </div>

            {/* Aktivasyon kodu (isteğe bağlı) */}
            {/* <TextInput id="code" placeholder="Activation code" Icon={Key} /> */}

            <Button className="w-full">Create account</Button>

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
