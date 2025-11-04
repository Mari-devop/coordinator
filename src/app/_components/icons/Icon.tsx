interface IconProps {
  name: "chart-bar" | "chevron-right" | "chevron-down" | "close" | "search" | "plus" | "check" | "copy" | "info" | "edit" | "google-ads" | "google" | "lock" | "user" | "spinner" | "settings" | "users";
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Icon({ name, className, width = 24, height = 24 }: IconProps) {
  const fillIcons = ["info", "google-ads", "google", "lock", "user", "settings"];
  const isFillIcon = fillIcons.includes(name);
  
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={isFillIcon ? "currentColor" : "none"}
      stroke={isFillIcon ? "none" : "currentColor"}
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
}

