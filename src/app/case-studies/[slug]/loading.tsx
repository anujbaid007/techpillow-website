export default function Loading() {
  return (
    <div className="py-20 lg:py-28 animate-pulse">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="h-4 bg-muted rounded w-32 mb-8" />
        <div className="h-6 bg-muted rounded-full w-28 mb-4" />
        <div className="h-12 bg-muted rounded-lg w-2/3 mb-4" />
        <div className="h-6 bg-muted rounded-lg w-1/2 mb-12" />
        <div className="aspect-[16/9] bg-muted rounded-2xl" />
      </div>
    </div>
  );
}
