export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-lg border bg-white ${className}`}>
      {children}
    </div>
  );
}
