import { OnboardingData } from "../../../../_types/onboardingTypes";
import { steps } from "../constants";
import { onboardingStyles } from "../../../_styles/onboardingStyles";

interface StepContentProps {
  currentStep: number;
  formData: OnboardingData;
  onInputChange: (field: keyof OnboardingData, value: string) => void;
  onToggleInviteSection: (show: boolean) => void;
  onNextStep: () => void;
}

export default function StepContent({ 
  currentStep, 
  formData, 
  onInputChange, 
  onToggleInviteSection,
  onNextStep 
}: StepContentProps) {
  const currentStepData = steps[currentStep - 1];
  const { stepContent, roleSelection, teamSetup, googleAds, buttons } = onboardingStyles;
  
  switch (currentStep) {
    case 1:
      return (
        <div className={stepContent.container}>
          <div className={stepContent.header}>
            <div className={stepContent.icon}>{currentStepData.icon}</div>
            <h2 className={stepContent.title}>{currentStepData.title}</h2>
            <p className={stepContent.description}>{currentStepData.description}</p>
          </div>
          
          <div className={stepContent.form}>
            <div className={stepContent.grid}>
              <div className={stepContent.field}>
                <label className={stepContent.label}>
                  First Name <span className={stepContent.required}>*</span>
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => onInputChange('firstName', e.target.value)}
                  className={stepContent.input}
                  placeholder="Enter your first name"
                />
              </div>
              
              <div className={stepContent.field}>
                <label className={stepContent.label}>
                  Last Name <span className={stepContent.required}>*</span>
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => onInputChange('lastName', e.target.value)}
                  className={stepContent.input}
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div className={stepContent.field}>
              <label className={stepContent.label}>
                Mobile Number <span className={stepContent.required}>*</span>
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => onInputChange('mobile', e.target.value)}
                className={stepContent.input}
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className={stepContent.container}>
          <div className={stepContent.header}>
            <div className={stepContent.icon}>{currentStepData.icon}</div>
            <h2 className={stepContent.title}>{currentStepData.title}</h2>
            <p className={stepContent.description}>{currentStepData.description}</p>
          </div>
          
          <div className={stepContent.form}>
            <div className={stepContent.field}>
              <label className={stepContent.label}>
                Company Name <span className={stepContent.required}>*</span>
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => onInputChange('company', e.target.value)}
                className={stepContent.input}
                placeholder="Enter your company name"
              />
            </div>
            
            <div className={stepContent.field}>
              <label className={stepContent.label}>
                Your Role <span className={stepContent.required}>*</span>
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => onInputChange('role', e.target.value)}
                className={stepContent.input}
                placeholder="e.g., Marketing Manager, Sales Executive"
              />
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className={stepContent.containerWide}>
          <div className={stepContent.header}>
            <div className={stepContent.icon}>{currentStepData.icon}</div>
            <h2 className={stepContent.title}>{currentStepData.title}</h2>
            <p className={stepContent.description}>{currentStepData.description}</p>
          </div>
          
          <div className={roleSelection.container}>
            <div
              className={`${roleSelection.card} ${
                formData.userType === "co-worker"
                  ? roleSelection.cardSelected
                  : roleSelection.cardUnselected
              }`}
              onClick={() => onInputChange('userType', 'co-worker')}
            >
              <div className={roleSelection.content}>
                <h3 className={roleSelection.title}>Co-Worker</h3>
                <p className={roleSelection.description}>Individual contributor focused on personal tasks, reports, and productivity tracking</p>
              </div>
            </div>
            
            <div
              className={`${roleSelection.card} ${
                formData.userType === "manager"
                  ? roleSelection.cardSelected
                  : roleSelection.cardUnselected
              }`}
              onClick={() => onInputChange('userType', 'manager')}
            >
              <div className={roleSelection.content}>
                <h3 className={roleSelection.title}>Manager</h3>
                <p className={roleSelection.description}>Team leader with access to team management, analytics, and performance oversight</p>
              </div>
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className={stepContent.container}>
          <div className={stepContent.header}>
            <div className={stepContent.icon}>{currentStepData.icon}</div>
            <h2 className={stepContent.title}>{currentStepData.title}</h2>
            <p className={stepContent.description}>
              {formData.userType === "manager" 
                ? "Invite your co-workers to join your team" 
                : "You're all set as a co-worker!"}
            </p>
          </div>
          
          {formData.userType === "manager" ? (
            <div className={teamSetup.container}>
              <h3 className={teamSetup.title}>Ready to invite your team?</h3>
              <p className={teamSetup.description}>
                You can invite co-workers now or skip this step and do it later from your settings.
              </p>
              <div className={teamSetup.buttonGroup}>
                <button
                  onClick={() => onToggleInviteSection(true)}
                  className={buttons.primary}
                >
                  Invite Co-Workers
                </button>
                <button
                  onClick={onNextStep}
                  className={buttons.secondary}
                >
                  Skip for Now
                </button>
              </div>
            </div>
          ) : (
            <div className={teamSetup.container}>
              <h3 className={teamSetup.title}>Perfect!</h3>
              <p className={teamSetup.description}>
                As a co-worker, you&apos;ll be able to track your tasks and generate reports.
              </p>
            </div>
          )}
        </div>
      );

    case 5:
      return (
        <div className={stepContent.container}>
          <div className={stepContent.header}>
            <div className={stepContent.icon}>{currentStepData.icon}</div>
            <h2 className={stepContent.title}>{currentStepData.title}</h2>
            <p className={stepContent.description}>Link your Google Ads account to get started</p>
          </div>
          
          <div className={googleAds.container}>
            <h3 className={googleAds.title}>Connect Google Ads</h3>
            <p className={googleAds.description}>
              Link your Google Ads account to start managing campaigns and tracking performance.
            </p>
            <div className={googleAds.buttonGroup}>
              <button
                className={buttons.primary}
                onClick={() => console.log("Connect Google Ads")}
              >
                Connect Google Ads
              </button>
              <button
                onClick={() => console.log("Skip Google Ads")}
                className={buttons.secondary}
              >
                Skip for Now
              </button>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
