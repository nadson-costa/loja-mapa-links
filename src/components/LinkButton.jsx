import { ExternalLink } from 'lucide-react'

export default function LinkButton({ label, href, icon, description, onClick, type = 'external' }) {
  const classes = `
    w-full flex items-center justify-between
    bg-background-secondary hover:bg-background-hover
    border border-nude/60 hover:border-rose-gold-light
    text-text-primary rounded-xl px-5 py-5
    shadow-sm hover:shadow-md
    transition-smooth
    focus:outline-none focus:ring-2 focus:ring-rose-gold-light/40
  `

  if (type === 'internal') {
    return (
      <button onClick={onClick} className={classes}>
        <div className="flex items-center gap-3">
          {icon && <span className="flex-shrink-0 text-rose-gold">{icon}</span>}
          <div className="flex flex-col items-start">
            <span className="font-medium text-sm tracking-wide">{label}</span>
            {description && (
              <span className="text-xs text-text-muted mt-0.5">{description}</span>
            )}
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-text-muted flex-shrink-0" />
      </button>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="flex-shrink-0 text-rose-gold">{icon}</span>}
        <div className="flex flex-col items-start">
          <span className="font-medium text-sm tracking-wide">{label}</span>
          {description && (
            <span className="text-xs text-text-muted mt-0.5">{description}</span>
          )}
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-text-muted flex-shrink-0" />
    </a>
  )
}
