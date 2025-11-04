"use client";
import { useState } from "react";
import Icon from "@/app/_components/icons/Icon";
import { coWorkerInviteStyles } from "@/app/(menu)/_styles/coWorkerStyles";

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
          <Icon
            name="close"
            className={coWorkerInviteStyles.closeIcon}
          />
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
                <Icon
                  name="check"
                  className={coWorkerInviteStyles.copyIcon}
                />
                Copied!
              </>
            ) : (
              <>
                <Icon
                  name="copy"
                  className={coWorkerInviteStyles.copyIcon}
                />
                Copy
              </>
            )}
          </button>
        </div>

        <div className={coWorkerInviteStyles.infoBox}>
          <div className={coWorkerInviteStyles.infoContent}>
            <div className="flex-shrink-0">
              <Icon
                name="info"
                className={coWorkerInviteStyles.infoIcon}
                width={20}
                height={20}
              />
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
