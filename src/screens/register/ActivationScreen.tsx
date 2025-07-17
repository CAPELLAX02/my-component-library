import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { AuthLayout } from "@/components/auth/AuthLayout";

const TOTAL = 300;

export const ActivationScreen = () => {
    const [sec, setSec] = useState(TOTAL);
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        if (sec === 0) return setExpired(true);
        const t = setTimeout(() => setSec(sec - 1), 1000);
        return () => clearTimeout(t);
    }, [sec]);

    const pct = (sec / TOTAL) * 100;

    return (
        <>
            <AuthLayout title="Enter the 5‑digit code" subtitle="Step 2 of 4">
                <div className="space-y-6">
                    {/* Dairesel sayaç */}
                    <div className="mx-auto h-24 w-24 relative">
                        <svg className="h-full w-full rotate-[-90deg]">
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="#e2e8f0"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle
                                cx="50%"
                                cy="50%"
                                r="45%"
                                stroke="#22c55e"
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray="283"
                                strokeDashoffset={`${(283 * (100 - pct)) / 100}`}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                            {sec}s
                        </div>
                    </div>

                    {/* OTP input (shadcn v0.7’de) */}
                    <InputOTP maxLength={5}>
                        <InputOTPGroup>
                            {[...Array(5)].map((_, i) => (
                                <InputOTPSlot key={i} index={i} />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>

                    <Button className="w-full" asChild>
                        <a href="/register/password">Verify</a>
                    </Button>

                    <Separator />

                    <Button variant="ghost" className="w-full text-primary">
                        Resend Code
                    </Button>
                </div>
            </AuthLayout>

            {/* Timeout diyaloğu */}
            <Dialog open={expired}>
                <DialogContent>
                    <DialogHeader>Code expired</DialogHeader>
                    Kodun süresi doldu. Lütfen tekrar gönderin.
                    <DialogFooter>
                        <Button
                            onClick={() => {
                                setSec(TOTAL);
                                setExpired(false);
                            }}
                        >
                            Resend
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
