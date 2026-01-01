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
        <circle cx="12" cy="12" r="10" fill="#25D366" />
        <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="1.8" fill="none" opacity="0.9" />
        <path
          d="M8.1 6.9c.3-.6.8-1.1 1.4-1.4.3-.1.6 0 .8.2l1.8 1.2c.2.1.3.4.2.7l-.5 1c.9 1.8 2.3 3.2 4.1 4.1l1-.5c.3-.1.6 0 .7.2l1.2 1.8c.2.3.2.6.1.8-.3.6-.8 1.1-1.4 1.4-.5.2-1.1.3-1.6.2-4-1.3-7.1-4.4-8.4-8.4-.1-.5 0-1.1.2-1.6Z"
          fill="#ffffff"
        />
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