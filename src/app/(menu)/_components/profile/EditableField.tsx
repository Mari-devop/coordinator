"use client";
import { useState } from "react";
import { editableFieldStyles } from "../../_styles/profileStyles";
import { sharedInputStyles } from "../../_styles/sharedStyles";

interface EditableFieldProps {
  label: string;
  value: string;
  type?: string;
  placeholder?: string;
  onSave: (newValue: string) => void;
  required?: boolean;
  error?: string;
}

export default function EditableField({
  label,
  value,
  type = "text",
  placeholder,
  onSave,
  required = false,
  error,
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [hasError, setHasError] = useState(false);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditValue(value);
    setHasError(false);
  };

  const handleSave = () => {
    if (required && !editValue.trim()) {
      setHasError(true);
      return;
    }

    onSave(editValue);
    setIsEditing(false);
    setHasError(false);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
    setHasError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="space-y-2">
        <label className={sharedInputStyles.label}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <div className="flex items-center space-x-2">
          <input
            type={type}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={`flex-1 ${sharedInputStyles.base} ${
              hasError ? sharedInputStyles.error : ""
            }`}
            autoFocus
          />
          <button
            onClick={handleSave}
            className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
            title="Save"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <button
            onClick={handleCancel}
            className="px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
            title="Cancel"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {hasError && (
          <p className="text-sm text-red-600">This field is required</p>
        )}
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }

  return (
    <div
      className={editableFieldStyles.display}
      onDoubleClick={handleDoubleClick}
    >
      <label className={editableFieldStyles.label}>{label}</label>
      <div className="flex items-center justify-between">
        <span className={editableFieldStyles.value}>
          {value || <span className="text-gray-400 italic">Not set</span>}
        </span>
        <svg
          className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </div>
      <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Double-click to edit
      </p>
    </div>
  );
}
