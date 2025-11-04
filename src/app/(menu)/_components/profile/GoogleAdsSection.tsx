import Icon from "@/app/_components/icons/Icon";
import { profileSectionStyles, profileStyles } from "@/app/(menu)/_styles/profileStyles";
import { sharedButtonStyles } from "@/app/(menu)/_styles/sharedStyles";

export default function GoogleAdsSection() {
  const { googleAds } = profileStyles;
  
  return (
    <section className={profileSectionStyles.container}>
      <h2 className={googleAds.title}>
        <span className={googleAds.titleIconContainer}>
          <Icon
            name="google-ads"
            className={googleAds.titleIcon}
            width={16}
            height={16}
          />
        </span>
        Connected Google Ads Accounts
      </h2>

      <div className={googleAds.content}>
        <div className={googleAds.emptyState}>
          <div className={googleAds.emptyIconContainer}>
            <Icon
              name="plus"
              className={googleAds.emptyIcon}
              width={32}
              height={32}
            />
          </div>
          <h3 className={googleAds.emptyTitle}>
            No Google Ads accounts connected
          </h3>
          <p className={googleAds.emptyDescription}>
            Connect your Google Ads account to start managing campaigns
          </p>
          <button className={sharedButtonStyles.primary}>
            <Icon
              name="google"
              className={googleAds.connectButtonIcon}
              width={16}
              height={16}
            />
            Connect Google Ads
          </button>
        </div>
      </div>
    </section>
  );
}
