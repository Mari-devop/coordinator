import SummaryPanel from "./SummaryPanel"; 
import Icon from "@/app/_components/icons/Icon";
import { OnboardingData } from "@/app/_types/onboardingTypes";
import { onboardingStyles } from "@/app/(auth)/_styles/onboardingStyles";

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
              <Icon
                name="users"
                className="w-6 h-6 mr-3"
                width={24}
                height={24}
              />
              Invite Co-Workers
            </h3>
            <button
              onClick={onClose}
              className={invite.closeButton}
            >
              <Icon
                name="close"
                className="w-6 h-6"
                width={24}
                height={24}
              />
            </button>
          </div>
          <p className={invite.description}>
            Invite your team members to join your workspace and start collaborating.
          </p>
        </div>
        <div className={invite.contentCard}>
          <div className={invite.contentCenter}>
            <h3 className={invite.contentTitle}>Invite Co-Workers</h3>
            <p className={invite.contentDescription}>This feature will be available soon.</p>
            <button
              onClick={onClose}
              className={invite.contentCloseButton}
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div>
        <SummaryPanel formData={formData} />
      </div>
    </div>
  );
}