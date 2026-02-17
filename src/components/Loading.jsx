export default function Loading() {
  return (
    <div className="fixed inset-0 bg-background-primary flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-nude border-t-rose-gold rounded-full animate-spin"></div>
        <p className="text-text-muted text-xs font-light tracking-widest uppercase animate-shimmer">
          Carregando
        </p>
      </div>
    </div>
  )
}
