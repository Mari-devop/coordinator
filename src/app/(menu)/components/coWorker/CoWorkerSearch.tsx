"use client";
import { useState } from "react";
import { coWorkerSearchStyles } from "../../styles/coWorkerStyles";

interface CoWorkerSearchProps {
  onSearch: (query: string) => void;
  onInviteClick: () => void;
  hasResults: boolean;
}

export default function CoWorkerSearch({
  onSearch,
  onInviteClick,
  hasResults,
}: CoWorkerSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  return (
    <div className={coWorkerSearchStyles.container}>
      <div className={coWorkerSearchStyles.form}>
        <div className={coWorkerSearchStyles.inputContainer}>
          <form onSubmit={handleSearch} className="relative">
            <div className={coWorkerSearchStyles.inputWrapper}>
              <div className={coWorkerSearchStyles.inputIcon}>
                <svg
                  className="h-5 w-5 text-[var(--textMuted)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search for co-workers by name or email..."
                className={coWorkerSearchStyles.input}
              />
            </div>
          </form>
        </div>

        {!hasResults && searchQuery && (
          <button
            onClick={onInviteClick}
            className={coWorkerSearchStyles.button}
          >
            <svg
              className={coWorkerSearchStyles.buttonIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Invite Co-Worker
          </button>
        )}
      </div>
    </div>
  );
}
