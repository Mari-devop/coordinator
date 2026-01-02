"use client";
import Image from "next/image";
import { CoWorker } from "@/app/_types/coworker";
import { getStatusColor, getInitials } from "@/app/_lib/co-worker.utils";
import Icon from "@/app/_components/icons/Icon";
import { coWorkerDetailStyles } from "@/app/(menu)/_styles/coWorkerStyles";

interface CoWorkerDetailHeaderProps {
  coWorker: CoWorker;
  onClose: () => void;
}

export default function CoWorkerDetailHeader({
  coWorker,
  onClose,
}: CoWorkerDetailHeaderProps) {
  return (
    <div className={coWorkerDetailStyles.header}>
      <div className={coWorkerDetailStyles.headerContent}>
        <div className={coWorkerDetailStyles.avatarContainer}>
          <div className={coWorkerDetailStyles.avatar}>
            {coWorker.avatar ? (
              <Image
                src={coWorker.avatar}
                alt={coWorker.name}
                width={64}
                height={64}
                className={coWorkerDetailStyles.avatarImage}
              />
            ) : (
              getInitials(coWorker.name)
            )}
          </div>
          <div
            className={`${
              coWorkerDetailStyles.statusIndicator
            } ${getStatusColor(coWorker.status)}`}
          ></div>
        </div>
        <div className={coWorkerDetailStyles.info}>
          <h3 className={coWorkerDetailStyles.name}>{coWorker.name}</h3>
          <p className={coWorkerDetailStyles.position}>{coWorker.position}</p>
          <p className={coWorkerDetailStyles.email}>{coWorker.email}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className={coWorkerDetailStyles.closeButton}
        title="Close"
      >
        <Icon
          name="close"
          className={coWorkerDetailStyles.closeIcon}
        />
      </button>
    </div>
  );
}
