import { datePickerProps } from "@/interfaces/datePicker.interface";
import { DatePicker } from "@nextui-org/react";
import React from "react";

export default function MainDatePicker({
    label,
    value,
    onChange,
    isDisabled = false,
}: datePickerProps) {
    return (
        <DatePicker
            label={label}
            value={value}
            className="font-peyda"
            variant="bordered"
            classNames={{
                calendar: ["font-peyda"],
            }}
            isDisabled={isDisabled}
            onChange={(newValue) => onChange(newValue)}
        />
    );
}
