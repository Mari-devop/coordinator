"use client";
import { editableFieldStyles } from "@/app/(menu)/_styles/profileStyles";

interface ReadOnlyFieldProps {
  label: string;
  value: string | null | undefined;
}

export default function ReadOnlyField({
  label,
  value,
}: ReadOnlyFieldProps) {
  const {
    display,
    label: labelStyle,
    value: valueStyle,
    valueContainer,
    notSetValue,
  } = editableFieldStyles;

  const displayValue = value 
    ? value === "manager" 
      ? "Manager" 
      : value === "co-worker" 
        ? "Co-Worker" 
        : value
    : null;

  return (
    <div className={display}>
      <label className={labelStyle}>{label}</label>
      <div className={valueContainer}>
        <span className={valueStyle}>
          {displayValue || <span className={notSetValue}>Not set</span>}
        </span>
      </div>
    </div>
  );
}

