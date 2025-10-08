import InviteSection from "../../../../(menu)/_components/coWorker/InviteSection";
import SummaryPanel from "./SummaryPanel";
import { OnboardingData } from "../../../../_types/onboardingTypes";
import { onboardingStyles } from "../../../_styles/onboardingStyles";

interface InviteSectionWrapperProps {
  formData: OnboardingData;
  onClose: () => void;
}

export default function InviteSectionWrapper({ formData, onClose }: InviteSectionWrapperProps) {
  const { container, invite } = onboardingStyles;
  
  return (
    <div className={container.gridTwoCol}>
      <div>
        <div className={`${invite.header}`}>
          <div className={invite.headerContent}>
            <h3 className={invite.title}>
              <span className={invite.titleIcon}>👥</span>
              Invite Co-Workers
            </h3>
            <button
              onClick={onClose}
              className={invite.closeButton}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className={invite.description}>
            Invite your team members to join your workspace and start collaborating.
          </p>
        </div>
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <InviteSection 
            isOpen={true} 
            onClose={onClose} 
          />
        </div>
      </div>
      <div>
        <SummaryPanel formData={formData} />
      </div>
    </div>
  );
}