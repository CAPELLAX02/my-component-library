'use client';

import { useState } from "react";
import Cropper from "react-easy-crop";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/auth/TextInput";
import { Phone } from "lucide-react";

export const BuildProfileScreen = () => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [date, setDate] = useState<Date | undefined>();
    const [phone, setPhone] = useState("");

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, "").slice(0, 10);
        const parts = [];
        if (digits.length >= 3) parts.push(digits.slice(0, 3));
        if (digits.length >= 6) parts.push(digits.slice(3, 6));
        if (digits.length >= 8) parts.push(digits.slice(6, 8));
        if (digits.length > 8) parts.push(digits.slice(8));
        return parts.join(" ");
    };

    return (
        <AuthLayout title="Build your profile" subtitle="Step 3 of 4">
            <div className="space-y-6">

                {/* Profile Photo */}
                <div className="space-y-1">
                    <Label className="font-medium">Profile Photo</Label>
                    <Input type="file" accept="image/*" />
                    <div className="relative h-48 w-full overflow-hidden rounded-md">
                        <Cropper
                            image="/placeholder.jpg"
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                        />
                    </div>
                    <input
                        type="range"
                        min={1}
                        max={3}
                        step={0.1}
                        value={zoom}
                        onChange={(e) => setZoom(Number(e.target.value))}
                    />
                </div>

                {/* Name fields */}
                <div className="grid grid-cols-2 gap-4">
                    <TextInput id="firstName" placeholder="First Name" Icon={() => <></>} />
                    <TextInput id="lastName" placeholder="Last Name" Icon={() => <></>} />
                </div>

                {/* Phone number */}
                <div className="space-y-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-gray-500">
                            +90
                        </span>
                        <Input
                            id="phone"
                            placeholder="531 881 18 76"
                            value={phone}
                            onChange={(e) => setPhone(formatPhone(e.target.value))}
                            className="pl-12"
                            maxLength={13} // Includes spaces
                        />
                        <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                </div>

                {/* Birth Date */}
                <div className="space-y-1">
                    <Label>Birth Date</Label>
                    <Button
                        variant="outline"
                        className="w-full text-left"
                        onClick={() => setDate(undefined)}
                    >
                        {date ? date.toLocaleDateString() : "Select a date"}
                    </Button>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="border rounded-md mt-2"
                    />
                </div>

                <Button className="w-full" asChild>
                    <a href="/register/nickname">Continue</a>
                </Button>
            </div>
        </AuthLayout>
    );
};
