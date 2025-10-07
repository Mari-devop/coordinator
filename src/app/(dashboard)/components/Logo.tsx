import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link 
        href="/dashboard" 
        className="text-2xl font-bold text-[var(--secondaryBackground)] font-[var(--font-wix-madefor-display)] uppercase border border-[var(--secondaryBackground)] rounded-md px-3 py-1 hover:bg-[var(--secondaryBackground)] hover:text-white transition-colors duration-200"
      >
        Coordinator
      </Link>
    </div>
  );
}
