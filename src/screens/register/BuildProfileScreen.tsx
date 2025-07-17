import Cropper from "react-easy-crop";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextInput } from "@/components/auth/TextInput";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { User } from "lucide-react";
import {Label} from "@/components/ui/label.tsx";

export const BuildProfileScreen = () => {
    const [showCal, setShowCal] = useState(false);
    const [date, setDate] = useState<Date | undefined>();
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    return (
        <AuthLayout title="Build your profile" subtitle="Step 3 of 4">
            <div className="space-y-6">
                {/* Avatar upload + crop */}
                <div className="space-y-1">
                    <Label className="font-medium">Profile photo</Label>
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

                <TextInput id="nickname" placeholder="Nickname" Icon={User} />

                {/* Doğum tarihi */}
                <div className="space-y-1">
                    <Label>Birth date</Label>
                    <Button variant="outline" className="w-full" onClick={() => setShowCal(true)}>
                        {date ? date.toLocaleDateString() : "Choose date"}
                    </Button>
                    {showCal && (
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(d) => {
                                setDate(d);
                                setShowCal(false);
                            }}
                        />
                    )}
                </div>

                <Button className="w-full" asChild>
                    <a href="/home">Continue</a>
                </Button>
            </div>
        </AuthLayout>
    );
}
