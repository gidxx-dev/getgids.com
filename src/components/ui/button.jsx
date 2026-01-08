export function Button({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`rounded-lg px-3 py-1 font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
