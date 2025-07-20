import { useState } from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { CheckCircle, XCircle } from "lucide-react";
import clsx from "clsx";

export const SetUpPasswordScreen = () => {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    // Kuralları ayrı kontrol ediyoruz
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const isLongEnough = password.length >= 8;

    const strength = (() => {
        let score = 0;
        if (isLongEnough) score++;
        if (hasUppercase) score++;
        if (hasNumber) score++;
        if (hasSpecialChar) score++;
        return (score / 4) * 100;
    })();

    const PasswordRule = ({
                              label,
                              valid,
                          }: {
        label: string;
        valid: boolean;
    }) => (
        <div className="flex items-center gap-2 text-sm">
            {valid ? (
                <CheckCircle className="text-green-600 h-4 w-4" />
            ) : (
                <XCircle className="text-gray-400 h-4 w-4" />
            )}
            <span className={clsx(valid ? "text-green-700" : "text-gray-500")}>{label}</span>
        </div>
    );

    return (
        <AuthLayout
            title="Create a strong password"
            subtitle="Make sure your password is secure and easy for you to remember."
        >
            <div className="space-y-6">
                {/* New Password */}
                <PasswordInput
                    id="password"
                    placeholder="New password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Güç seviyesi progress bar */}
                <Progress value={strength} />

                {/* Güvenlik kuralları */}
                <div className="space-y-1">
                    <PasswordRule label="Use at least 8 characters" valid={isLongEnough} />
                    <PasswordRule label="Use at least one uppercase letter (A-Z)" valid={hasUppercase} />
                    <PasswordRule label="Use at least one lowercase letter (a-z)" valid={hasLowercase} />
                    <PasswordRule label="Use at least one number (0-9)" valid={hasNumber} />
                    <PasswordRule label="Use at least one special character (!@#$...)" valid={hasSpecialChar} />
                </div>

                {/* Confirm */}
                <PasswordInput
                    id="confirm"
                    placeholder="Repeat password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                />

                <Button className="w-full" asChild>
                    <a href="/register/profile">Finish</a>
                </Button>
            </div>
        </AuthLayout>
    );
};
