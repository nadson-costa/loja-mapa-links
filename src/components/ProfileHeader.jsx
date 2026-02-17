export default function ProfileHeader({ name, title, subtitle }) {
  return (
    <header className="text-center mb-5">
      <h1 className="text-2xl font-playfair font-semibold text-text-primary tracking-wide">
        {name}
      </h1>
      <p className="text-1l font-medium text-text-secondary mt-1.5 tracking-wide">
        {title}
      </p>
      {subtitle && (
        <p className="text-sm font-medium text-text-muted mt-1 tracking-wider uppercase">
          {subtitle}
        </p>
      )}
    </header>
  )
}
