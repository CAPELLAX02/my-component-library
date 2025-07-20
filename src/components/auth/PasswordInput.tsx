import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock } from "lucide-react";
import * as React from "react";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordInput = ({
                                  id,
                                  placeholder = "••••••",
                                  value,
                                  onChange,
                                  ...rest
                              }: PasswordInputProps) => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            {/* Left Icon */}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="h-4 w-4 text-gray-400" />
            </span>

            {/* Password Field */}
            <Input
                id={id}
                type={show ? "text" : "password"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="pl-10 pr-11"
                {...rest}
            />

            {/* Show & Hide */}
            <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
            >
                {/* Right Icon */}
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
        </div>
    );
};
