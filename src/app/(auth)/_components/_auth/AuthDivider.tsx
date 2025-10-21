"use client";
import { dividerStyles } from "../../_styles/authStyles";

export default function AuthDivider() {
  return (
    <div className={dividerStyles.container}>
      <div className={dividerStyles.line}></div>
      <span className={dividerStyles.text}>or</span>
      <div className={dividerStyles.line}></div>
    </div>
  );
}
