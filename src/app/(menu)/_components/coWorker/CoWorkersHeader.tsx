import { coWorkerHeaderStyles } from "@/app/(menu)/_styles/coWorkerStyles";

export default function CoWorkersHeader() {
  return (
    <div className={coWorkerHeaderStyles.container}>
      <h1 className={coWorkerHeaderStyles.title}>👥 Co-Workers</h1>
      <p className={coWorkerHeaderStyles.subtitle}>
        Connect with your team members and view their reports
      </p>
    </div>
  );
}
