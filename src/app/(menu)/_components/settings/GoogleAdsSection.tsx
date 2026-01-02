"use client";
import Icon from "@/app/_components/icons/Icon";
import { googleAdsStyles } from "@/app/(menu)/_styles/settingsStyles";

export default function GoogleAdsSection() {
  return (
    <section className={googleAdsStyles.container}>
      <h2 className={googleAdsStyles.title}>
        <span className={googleAdsStyles.icon}>
          <Icon
            name="google-ads"
            className={googleAdsStyles.iconStyle}
            width={16}
            height={16}
          />
        </span>
        Connected Google Ads Accounts
      </h2>

      <div className={googleAdsStyles.content}>
        <div className={googleAdsStyles.emptyState}>
          <div className={googleAdsStyles.emptyIcon}>
            <Icon
              name="plus"
              className={googleAdsStyles.emptyIconStyle}
              width={32}
              height={32}
            />
          </div>
          <h3 className={googleAdsStyles.emptyTitle}>
            No Google Ads accounts connected
          </h3>
          <p className={googleAdsStyles.emptyDescription}>
            Connect your Google Ads account to start managing campaigns
          </p>
          <button className={googleAdsStyles.connectButton}>
            <Icon
              name="google"
              className={googleAdsStyles.connectButtonIcon}
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
