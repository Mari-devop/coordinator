"use client";
import { useState } from "react";
import { coWorkerInviteStyles } from "../../_styles/coWorkerStyles";

interface InviteSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InviteSection({ isOpen, onClose }: InviteSectionProps) {
  const [copied, setCopied] = useState(false);
  const inviteLink =
    typeof window !== "undefined"
      ? `${window.location.origin}/invite/co-worker`
      : "";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={coWorkerInviteStyles.container}>
      <div className={coWorkerInviteStyles.header}>
        <h3 className={coWorkerInviteStyles.title}>Invite Co-Worker</h3>
        <button onClick={onClose} className={coWorkerInviteStyles.closeButton}>
          <svg
            className={coWorkerInviteStyles.closeIcon}
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

      <div className={coWorkerInviteStyles.content}>
        <p className={coWorkerInviteStyles.description}>
          Share this link with your co-worker to invite them to join your team:
        </p>

        <div className={coWorkerInviteStyles.inputContainer}>
          <input
            type="text"
            value={inviteLink}
            readOnly
            className={coWorkerInviteStyles.input}
          />
          <button
            onClick={copyToClipboard}
            className={`${coWorkerInviteStyles.copyButton} ${
              copied
                ? coWorkerInviteStyles.copyButtonSuccess
                : coWorkerInviteStyles.copyButtonDefault
            }`}
          >
            {copied ? (
              <>
                <svg
                  className={coWorkerInviteStyles.copyIcon}
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
                Copied!
              </>
            ) : (
              <>
                <svg
                  className={coWorkerInviteStyles.copyIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>

        <div className={coWorkerInviteStyles.infoBox}>
          <div className={coWorkerInviteStyles.infoContent}>
            <div className="flex-shrink-0">
              <svg
                className={coWorkerInviteStyles.infoIcon}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={coWorkerInviteStyles.infoText}>
              <p>
                Your co-worker will be able to join your team and you&apos;ll be
                able to see their reports and collaborate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
