export default function AnnouncementBar({ text }: { text: string }) {
  return (
    <div className="bg-navy-deep text-center text-white text-[13px] sm:text-sm font-semibold tracking-wide px-4 py-2.5 relative z-50">
      <span className="inline-block animate-pulse">🔥</span> {text}{" "}
      <span className="inline-block animate-pulse">🔥</span>
    </div>
  );
}
