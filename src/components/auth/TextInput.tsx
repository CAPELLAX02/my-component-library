import { Input } from "@/components/ui/input";
import * as React from "react";

type TextInputProps = {
    id: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    Icon: React.ComponentType<{ className?: string }>;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
                              id,
                              type = "text",
                              placeholder,
                              Icon,
                              value,
                              onChange,
                          }: TextInputProps) => {
    return (
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Icon className="h-4 w-4 text-gray-400" />
            </span>

            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                className="pl-10"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
