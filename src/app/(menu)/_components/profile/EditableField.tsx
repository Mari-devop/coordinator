"use client";
import { useState } from "react";
import Icon from "@/app/_components/icons/Icon";
import { editableFieldStyles } from "@/app/(menu)/_styles/profileStyles";
import { sharedInputStyles } from "@/app/(menu)/_styles/sharedStyles";

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
  value,
  label,
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

  const {
    editContainer,
    editInputContainer,
    saveButton,
    cancelButton,
    buttonIcon,
    errorMessage,
    requiredIndicator,
  } = editableFieldStyles;

  if (isEditing) {
    return (
      <div className={editContainer}>
        <label className={sharedInputStyles.label}>
          {label}
          {required && <span className={requiredIndicator}>*</span>}
        </label>
        <div className={editInputContainer}>
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
            className={saveButton}
            title="Save"
          >
            <Icon
              name="check"
              className={buttonIcon}
            />
          </button>
          <button
            onClick={handleCancel}
            className={cancelButton}
            title="Cancel"
          >
            <Icon
              name="close"
              className={buttonIcon}
            />
          </button>
        </div>
        {hasError && (
          <p className={errorMessage}>This field is required</p>
        )}
        {error && <p className={errorMessage}>{error}</p>}
      </div>
    );
  }

  const {
    display,
    label: labelStyle,
    value: valueStyle,
    valueContainer,
    editIcon,
    hintText,
    notSetValue,
  } = editableFieldStyles;

  return (
    <div
      className={display}
      onDoubleClick={handleDoubleClick}
    >
      <label className={labelStyle}>{label}</label>
      <div className={valueContainer}>
        <span className={valueStyle}>
          {value || <span className={notSetValue}>Not set</span>}
        </span>
        <Icon
          name="edit"
          className={editIcon}
        />
      </div>
      <p className={hintText}>
        Double-click to edit
      </p>
    </div>
  );
}
