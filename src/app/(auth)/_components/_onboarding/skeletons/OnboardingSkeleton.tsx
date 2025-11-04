import { skeletonStyles } from "@/app/(auth)/_styles/skeletonStyles";

export default function OnboardingSkeleton() {
  const { layout, onboarding, form, navigation, summary } = skeletonStyles;

  return (
    <div className={layout.main}>
      <div className={onboarding.header.container}>
        <div className={onboarding.header.card}>
          <div className={onboarding.header.flexContainer}>
            <div>
              <div className={onboarding.header.title}></div>
              <div className={onboarding.header.subtitle}></div>
            </div>
            <div className={onboarding.header.progressContainer}>
              <div className={onboarding.header.progressText}></div>
              <div className={onboarding.header.progressSubtext}></div>
            </div>
          </div>
          
          <div className={onboarding.header.subtitle}></div>
        </div>
      </div>

      <div className={layout.content}>
        <div className={layout.grid}>
          <div className={layout.flexCol}>
            <div className={layout.flexColWide}>
              <div className={onboarding.stepContent.header}>
                <div className={onboarding.stepContent.icon}></div>
                <div className={onboarding.stepContent.title}></div>
                <div className={onboarding.stepContent.description}></div>
              </div>
              
              <div className={form.container}>
                <div className={form.grid.twoCol}>
                  <div className={form.field}>
                    <div className={form.label}></div>
                    <div className={form.input}></div>
                  </div>
                  <div className={form.field}>
                    <div className={form.label}></div>
                    <div className={form.input}></div>
                  </div>
                </div>
                
                <div className={form.field}>
                  <div className={form.label}></div>
                  <div className={form.input}></div>
                </div>
              </div>
            </div>

            <div className={navigation.container}>
              <div className={navigation.button}></div>
              <div className={navigation.buttonSmall}></div>
            </div>
          </div>

          <div className={layout.flexColSmall}>
            <div className={summary.container}>
              <div className={summary.panel}>
                <div className={summary.title}>
                  <div className={summary.titleIcon}></div>
                  <div className={summary.titleText}></div>
                </div>
                
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className={summary.section}>
                      <div className={summary.sectionHeader}>
                        <div className={summary.sectionIcon}></div>
                        <div className={summary.sectionTitle}></div>
                      </div>
                      <div className={summary.sectionContent}>
                        <div className={summary.detailRow}>
                          <div className={summary.detailLabel}></div>
                          <div className={summary.detailValue}></div>
                        </div>
                        <div className={summary.detailRow}>
                          <div className={summary.detailLabel}></div>
                          <div className={summary.detailValue}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
