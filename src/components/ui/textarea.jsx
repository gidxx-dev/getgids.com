export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring ${className}`}
      {...props}
    />
  );
}
