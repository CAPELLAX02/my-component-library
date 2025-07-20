import { useState } from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

export const CreateNicknameScreen = () => {
    const [nickname, setNickname] = useState("");

    const isValid = nickname.length >= 4;

    return (
        <AuthLayout
            title="Choose your nickname"
            subtitle="Step 4 of 4"
        >
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="nickname">Nickname</Label>
                    <div className="relative">
                        <Input
                            id="nickname"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            placeholder="coolusername"
                            className="pr-10"
                        />
                        {isValid && (
                            <CheckCircle className="absolute right-3 top-2.5 h-5 w-5 text-green-500" />
                        )}
                    </div>
                    <p className="text-xs text-gray-500">
                        This will be your public identity. You can always change it later.
                    </p>
                </div>

                <Button
                    className="w-full"
                    disabled={!isValid}
                    asChild
                >
                    <a href="/home">Finish</a>
                </Button>
            </div>
        </AuthLayout>
    );
};
