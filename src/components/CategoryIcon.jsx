const PATHS = {
  experiencias: (
    <>
      <path d="M4 20V10.5L12 4l8 6.5V20" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  gastronomia: (
    <>
      <path d="M6 3v7a3 3 0 0 0 3 3v8" />
      <path d="M6 3v5M9 3v5" />
      <path d="M18 3c-1.5 0-2.5 1.4-2.5 3.5S16.5 11 18 11v9" />
    </>
  ),
  perfumes: (
    <>
      <path d="M10 3h4v3h-4z" />
      <path d="M9 6h6l1.5 3v10a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1V9z" />
      <path d="M9.5 12h5" />
    </>
  ),
};

export default function CategoryIcon({ slug, size = 26, className = "" }) {
  const paths = PATHS[slug];
  if (!paths) return null;
  return (
    <svg
      className={"cat-icono" + (className ? ` ${className}` : "")}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}
