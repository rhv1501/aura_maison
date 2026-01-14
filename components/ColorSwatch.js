export default function ColorSwatch({ color, size = "md", selected = false }) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full border-2 ${
        selected
          ? "border-[var(--primary)] shadow-[var(--shadow-sm)]"
          : "border-[var(--border)] hover:border-[var(--primary)]"
      } transition-all duration-200 cursor-pointer`}
      style={{ backgroundColor: `var(${color.cssVar})` }}
      title={color.name}
    />
  );
}
