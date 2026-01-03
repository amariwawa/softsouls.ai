type Props = { name: "notion" | "whatsapp" | "sheets" | "forms" | "docs"; className?: string };

export default function BrandIcon({ name, className }: Props) {
  if (name === "notion") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect x="3" y="3" width="18" height="18" rx="3" fill="#ffffff" />
        <path d="M8 17V7h2.8l4.2 6.8V7h2v10h-2.8L10 10.2V17H8z" fill="#000000" />
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="#000" strokeWidth="1.5" fill="none" />
      </svg>
    );
  }
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <circle cx="12" cy="12" r="12" fill="#25D366" />
        <path d="M20.52 3.485A11.8 11.8 0 0012 0C5.373 0 0 5.373 0 12c0 2.118.556 4.125 1.556 5.887L0 24l6.263-1.64A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12a11.96 11.96 0 00-3.48-8.515zM12 22.05a10.05 10.05 0 01-5.13-1.41l-.368-.218-3.715.972.993-3.624-.241-.372A10.052 10.052 0 011.95 12c0-5.565 4.535-10.05 10.05-10.05 2.69 0 5.21 1.047 7.106 2.943A10.05 10.05 0 0122.05 12c0 5.565-4.535 10.05-10.05 10.05z" fill="#ffffff"/>
        <path d="M17.472 14.382c-.273-.137-1.604-.793-1.852-.883-.248-.091-.429-.137-.61.137-.182.273-.701.883-.86 1.065-.158.182-.315.205-.588.068-.273-.137-1.155-.426-2.199-1.357-.812-.722-1.362-1.609-1.52-1.882-.158-.273-.017-.42.119-.557.122-.121.273-.315.41-.473.137-.158.182-.273.273-.455.091-.182.045-.34-.022-.477-.067-.137-.61-1.474-.834-2.023-.22-.53-.44-.457-.61-.466-.158-.017-.34-.017-.522-.017-.182 0-.477.068-.728.34-.25.273-.955.934-.955 2.273s.977 2.633 1.114 2.812c.137.18 1.926 2.94 4.657 4.139.651.28 1.16.447 1.556.572.653.208 1.25.179 1.722.109.525-.078 1.604-.655 1.835-1.289.226-.63.226-1.17.158-1.289-.067-.119-.25-.182-.522-.31z" fill="#ffffff"/>
      </svg>
    );
  }
  if (name === "sheets") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect x="4" y="3" width="16" height="18" rx="2" fill="#22c55e" />
        <rect x="7" y="7" width="10" height="2" fill="#ffffff" />
        <rect x="7" y="11" width="10" height="2" fill="#ffffff" opacity=".9" />
        <rect x="7" y="15" width="10" height="2" fill="#ffffff" opacity=".8" />
      </svg>
    );
  }
  if (name === "forms") {
    return (
      <svg viewBox="0 0 24 24" className={className}>
        <rect x="4" y="3" width="16" height="18" rx="2" fill="#7c3aed" />
        <circle cx="8" cy="9" r="1.6" fill="#fff" />
        <rect x="11" y="8" width="7" height="2" fill="#ffffff" />
        <circle cx="8" cy="13" r="1.6" fill="#fff" opacity=".9" />
        <rect x="11" y="12" width="7" height="2" fill="#ffffff" opacity=".9" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" fill="#2563eb" />
      <rect x="7" y="8" width="10" height="2" fill="#ffffff" />
      <rect x="7" y="12" width="10" height="2" fill="#ffffff" opacity=".9" />
      <rect x="7" y="16" width="10" height="2" fill="#ffffff" opacity=".85" />
    </svg>
  );
}