"use client";

interface FormInputProps {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
}

export default function FormInput({
    id,
    label,
    type,
    value,
    onChange,
    placeholder,
    required = false,
    error
}: FormInputProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--accentColor)] focus:border-transparent ${
                    error ? 'border-red-300' : 'border-gray-300'
                }`}
            />
            {error && (
                <p className="mt-1 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
