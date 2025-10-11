import { OnboardingData } from "../../../../_types/onboardingTypes";
import { onboardingStyles } from "../../../_styles/onboardingStyles";

interface SummaryPanelProps {
  formData: OnboardingData;
}

export default function SummaryPanel({ formData }: SummaryPanelProps) {
  const { summary, gradients } = onboardingStyles;
  
  return (
    <div className="sticky top-24">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
        <h3 className={`${summary.title}`}>
          <span className={summary.titleIcon}>📋</span>
          Setup Summary
        </h3>
        
        <div className={summary.sections}>
          <div className={`${summary.section} ${gradients.personal}`}>
            <h4 className={`${summary.sectionHeader}`}>
              <span className={summary.sectionIcon}>👤</span>
              Personal Information
            </h4>
            <div className={summary.sectionContent}>
              <div className={summary.fieldRow}>
                <span className={summary.fieldLabel}>Name:</span>
                <span className={summary.fieldValue}>
                  {formData.firstName && formData.lastName 
                    ? `${formData.firstName} ${formData.lastName}` 
                    : 'Not provided'}
                </span>
              </div>
              <div className={summary.fieldRow}>
                <span className={summary.fieldLabel}>Mobile:</span>
                <span className={summary.fieldValue}>
                  {formData.mobile || 'Not provided'}
                </span>
              </div>
            </div>
          </div>
          <div className={`${summary.section} ${gradients.company}`}>
            <h4 className={`${summary.sectionHeader}`}>
              <span className={summary.sectionIcon}>🏢</span>
              Company Details
            </h4>
            <div className={summary.sectionContent}>
              <div className={summary.fieldRow}>
                <span className={summary.fieldLabel}>Company:</span>
                <span className={summary.fieldValue}>
                  {formData.company || 'Not provided'}
                </span>
              </div>
              <div className={summary.fieldRow}>
                <span className={summary.fieldLabel}>Role:</span>
                <span className={summary.fieldValue}>
                  {formData.role || 'Not provided'}
                </span>
              </div>
            </div>
          </div>
          <div className={`${summary.section} ${gradients.role}`}>
            <h4 className={`${summary.sectionHeader}`}>
              <span className={summary.sectionIcon}>🎯</span>
              Account Type
            </h4>
            <div className={summary.sectionContentCenter}>
              <div className={summary.fieldRowCenter}>
                <span className={summary.fieldLabel}>Type:</span>
                <span className={`${summary.badge} ${
                  formData.userType === 'manager' 
                    ? summary.badgeManager
                    : summary.badgeCoWorker
                }`}>
                  {formData.userType === 'manager' ? '👑 Manager' : '👤 Co-Worker'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}