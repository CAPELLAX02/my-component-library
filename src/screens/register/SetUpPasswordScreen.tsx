import { useState } from "react";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export const SetUpPasswordScreen = () => {
    const [password, setPassword] = useState("");

    const strength = (() => {
        let score = 0;
        if (password.length >= 8) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;
        return (score / 4) * 100;
    })();

    return (
        <AuthLayout title="Set a password" subtitle="Step 4 of 4">
            <div className="space-y-6">
                <PasswordInput
                    id="password"
                    placeholder="New password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Progress value={strength} />

                <PasswordInput id="confirm" placeholder="Repeat password" />

                <Button className="w-full" asChild>
                    <a href="/register/profile">Finish</a>
                </Button>
            </div>
        </AuthLayout>
    );
}
