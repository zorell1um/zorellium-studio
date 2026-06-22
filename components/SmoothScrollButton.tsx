"use client";

export default function SmoothScrollButton({
  targetId,
  children,
  className = "",
}: {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      className={className}
    >
      {children}
    </button>
  );
}