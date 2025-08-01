import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { AuthLayout } from "@/components/auth/AuthLayout";

const TOTAL = 180;

export const ActivationScreen = () => {
    const [sec, setSec] = useState(TOTAL);
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        if (sec === 0)
            return setExpired(true);
        const t = setTimeout(() => setSec((s) => s - 1), 1000);
        return () => clearTimeout(t);
    }, [sec]);

    const radius = 36
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - sec / TOTAL);

    const email: string | null = localStorage.getItem("email") ? localStorage.getItem("email") : null;

    return (
        <>
            <AuthLayout title="Verify Your Email" subtitle="Step 2 of 4">
                <p className="text-slate-600 text-sm">
                    A verification code has been sent to {' '}
                    {email && (
                        <span className="text-slate-900 font-bold">{email}.</span>
                    )}
                    {email === null && (
                        <span>the email address you provided.</span>
                    )}
                    {' '}
                    Enter the code to verify the ownership of this email. This code will expire in 3 minutes.
                </p>
                <div className="space-y-6 flex flex-col items-center">
                    {/* Countdown circle */}
                    <div className="relative h-20 w-20">
                        <svg className="h-full w-full rotate-[-90deg]">
                            <circle
                                cx="40"
                                cy="40"
                                r={radius}
                                stroke="#e2e8f0"
                                strokeWidth="8"
                                fill="none"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r={radius}
                                stroke="#0f172a" // Slate-900
                                strokeWidth="8"
                                fill="none"
                                strokeDasharray={circumference}
                                strokeDashoffset={offset}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-slate-900">
                            {sec}
                        </div>
                    </div>

                    {/* OTP input */}
                    <InputOTP maxLength={5}>
                        <InputOTPGroup className="flex justify-center gap-3">
                            {[...Array(5)].map((_, i) => (
                                <InputOTPSlot
                                    key={i}
                                    index={i}
                                    className="w-12 h-12 text-xl border border-slate-300 rounded-lg focus-visible:ring-2 focus-visible:ring-slate-900 transition-all"
                                />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>

                    {/* Doğrula butonu */}
                    <Button className="w-full mt-4" asChild>
                        <a href="/register/password">Verify</a>
                    </Button>

                    <Separator />

                    {/* Kod tekrar gönder */}
                    <Button className="w-full text-primary bg-slate-100 hover:bg-slate-200">
                        Resend Code
                    </Button>
                </div>
            </AuthLayout>

            {/* Expired Dialog */}
            <Dialog open={expired}>
                <DialogContent>
                    <DialogHeader className="text-lg font-semibold">
                        Code Expired
                    </DialogHeader>

                    The verification code has been expired. Please request a new one using the button below.

                    <DialogFooter>
                        <Button
                            className="w-full my-2"
                            onClick={() => {
                                setSec(TOTAL);
                                setExpired(false);
                            }}
                        >
                            Resend code {email && (<span>to {email}</span>)}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
