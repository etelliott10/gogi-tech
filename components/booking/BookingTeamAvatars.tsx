export function AvatarGroup() {
  return (
    <div className="flex -space-x-2">
      {['AG', 'KP', 'LM'].map((initials) => (
        <span
          key={initials}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-card text-[10px] font-semibold text-text-primary"
        >
          {initials}
        </span>
      ))}
    </div>
  );
}
