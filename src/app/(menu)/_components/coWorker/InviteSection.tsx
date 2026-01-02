"use client";
import { useState } from "react";
import Icon from "@/app/_components/icons/Icon";
import { coWorkerInviteStyles } from "@/app/(menu)/_styles/coWorkerStyles";
import { invitationsApi } from "@/app/_lib/api/invitations";
import { useToast } from "@/app/_contexts/ToastContext";

interface InviteSectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InviteSection({ isOpen, onClose }: InviteSectionProps) {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      const response = await invitationsApi.sendInvite(email);
      if (response.action === "added") {
        setSuccess(`User ${email} has been added to your team!`);
        toast.success(`User ${email} has been added to your team!`);
      } else {
        setSuccess(`Invitation sent successfully to ${email}!`);
        toast.success(`Invitation sent successfully to ${email}!`);
      }
      setEmail("");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send invitation";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
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
          Enter your co-worker&apos;s email address to invite them to join your team:
        </p>

        <form onSubmit={handleSubmit} className={coWorkerInviteStyles.form}>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="colleague@example.com"
              className={coWorkerInviteStyles.input}
              required
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !email}
            className={`${coWorkerInviteStyles.submitButton} ${
              isSubmitting || !email ? coWorkerInviteStyles.submitButtonDisabled : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Invitation"}
          </button>

          {success && (
            <div className={coWorkerInviteStyles.successMessage}>
              {success}
            </div>
          )}

          {error && (
            <div className={coWorkerInviteStyles.errorMessage}>
              {error}
            </div>
          )}
        </form>

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
                If the user already has an account, they will be added to your team immediately. 
                If not, they will receive an invitation email to join.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
