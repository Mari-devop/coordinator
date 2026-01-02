import Link from "next/link";
import { logoStyles } from "../_styles/logoStyles";

export default function Logo() {
  return (
    <div className={logoStyles.container}>
      <Link 
        href="/dashboard" 
        className={logoStyles.link}
      >
        Coordinator
      </Link>
    </div>
  );
}
