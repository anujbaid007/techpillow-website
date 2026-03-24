export default function Loading() {
  return (
    <div className="py-20 lg:py-28 animate-pulse">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="w-14 h-14 rounded-xl bg-muted mb-6" />
        <div className="h-12 bg-muted rounded-lg w-2/3 mb-4" />
        <div className="h-6 bg-muted rounded-lg w-1/2 mb-8" />
        <div className="h-12 bg-muted rounded-full w-56" />
      </div>
    </div>
  );
}
