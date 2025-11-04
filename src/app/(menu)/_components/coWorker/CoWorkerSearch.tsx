"use client";
import { useState } from "react";
import Icon from "@/app/_components/icons/Icon";
import { coWorkerSearchStyles } from "@/app/(menu)/_styles/coWorkerStyles";

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
                <Icon
                  name="search"
                  className="h-5 w-5 text-[var(--textMuted)]"
                />
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
            <Icon
              name="plus"
              className={coWorkerSearchStyles.buttonIcon}
            />
            Invite Co-Worker
          </button>
        )}
      </div>
    </div>
  );
}
