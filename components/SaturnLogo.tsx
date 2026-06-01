export function SaturnLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="saturn-body" x1="14" y1="10" x2="34" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f6c879" />
          <stop offset="1" stopColor="#e09a4b" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="12" fill="url(#saturn-body)" />
      <circle cx="20" cy="20" r="3.4" fill="#fff" fillOpacity="0.35" />
      <ellipse
        cx="24"
        cy="24"
        rx="21"
        ry="7.2"
        transform="rotate(-22 24 24)"
        stroke="#c98bff"
        strokeWidth="2.4"
        fill="none"
      />
    </svg>
  );
}
