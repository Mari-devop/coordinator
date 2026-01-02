"use client";
import { useState } from "react";
import SummaryPanel from "./SummaryPanel"; 
import Icon from "@/app/_components/icons/Icon";
import NavigationButtons from "./NavigationButtons";
import { OnboardingData } from "@/app/_types/onboardingTypes";
import { onboardingStyles } from "@/app/(auth)/_styles/onboardingStyles";
import { invitationsApi } from "@/app/_lib/api/invitations";

interface InviteSectionWrapperProps {
  formData: OnboardingData;
  onClose: () => void;
  onPrevStep: () => void;
  onNextStep: () => void;
  currentStep: number;
  totalSteps: number;
}

export default function InviteSectionWrapper({ 
  formData, 
  onClose, 
  onPrevStep,
  onNextStep,
  currentStep,
  totalSteps
}: InviteSectionWrapperProps) {
  const { container, card, summaryContainer, formContainer, invite } = onboardingStyles;
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
      } else {
        setSuccess(`Invitation sent successfully to ${email}!`);
      }
      setEmail("");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to send invitation";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={container.gridWithRows}>
      <div className={formContainer.container}>
        <div className={`${card.mainFlex} ${formContainer.card}`}>
          <div className={invite.wrapper.container}>
            <Icon
              name="users"
              className={invite.wrapper.icon}
              width={48}
              height={48}
            />
            <h2 className={invite.wrapper.title}>
              Invite your team members
            </h2>
            <p className={invite.wrapper.description}>
              Invite your team members to join your workspace and start collaborating.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={invite.form.container}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter colleague's email address"
              className={invite.form.input}
              required
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className={`${invite.form.button} ${isSubmitting || !email ? invite.form.buttonDisabled : ''}`}
            >
              {isSubmitting ? "Sending..." : "Send Invitation"}
            </button>
            
            {success && (
              <div className={invite.form.success}>
                {success}
              </div>
            )}
            
            {error && (
              <div className={invite.form.error}>
                {error}
              </div>
            )}
          </form>
        </div>

        <div className={formContainer.buttonsContainer}>
          <NavigationButtons 
            currentStep={currentStep}
            totalSteps={totalSteps}
            isStepValid={true}
            onPrevStep={() => {
              onClose();
              onPrevStep();
            }}
            onNextStep={onNextStep}
            onSubmit={async () => {
              onClose();
              onNextStep();
            }}
            isSubmitting={false}
          />
        </div>
      </div>

      <div className={summaryContainer.container}>
        <SummaryPanel formData={formData} />
      </div>
    </div>
  );
}