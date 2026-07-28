export default function Monogram({ size = 56, className = "" }) {
  return (
    <svg
      className={"monograma" + (className ? ` ${className}` : "")}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="44.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="50" cy="50" r="36.5" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
      <line x1="50" y1="2.5" x2="50" y2="7.5" stroke="currentColor" strokeWidth="1.8" />
      <line x1="50" y1="92.5" x2="50" y2="97.5" stroke="currentColor" strokeWidth="1.8" />
      <line x1="2.5" y1="50" x2="7.5" y2="50" stroke="currentColor" strokeWidth="1.8" />
      <line x1="92.5" y1="50" x2="97.5" y2="50" stroke="currentColor" strokeWidth="1.8" />
      <line x1="50" y1="35" x2="50" y2="65" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <text
        x="38"
        y="60"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="34"
        fill="currentColor"
      >
        C
      </text>
      <text
        x="63"
        y="60"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="34"
        fill="currentColor"
      >
        B
      </text>
    </svg>
  );
}
