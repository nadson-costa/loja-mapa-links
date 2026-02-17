export default function Footer({ cnpj, fullName }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto pt-12 pb-6 text-center">
      {cnpj && <p className="text-text-muted text-xs">{cnpj}</p>}
      <p className="text-text-muted text-xs mt-1 tracking-wide">
        &copy; {currentYear} {fullName}
      </p>
    </footer>
  )
}
