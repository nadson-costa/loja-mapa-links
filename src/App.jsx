import { useState, useEffect } from 'react'
import Avatar from '@/components/Avatar'
import ProfileHeader from '@/components/ProfileHeader'
import LinkButton from '@/components/LinkButton'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import { PROFILE_DATA, MAIN_LINKS, FOOTER_DATA } from '@/config/data'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        setLoading(false)
      }, 1200)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div
        className={`
          fixed inset-0 z-50
          transition-transform duration-1000 ease-out
          ${isExiting ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <Loading />
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start p-6 animate-fade-in relative">
      <div
        className="fixed inset-0 pointer-events-none animate-fade-in"
        style={{
          backgroundImage: 'url(/flor.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left bottom',
          backgroundSize: 'contain',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(253, 248, 245, 0.95)' }} />
      </div>

      <main className="w-full max-w-lg relative z-10">
        <Avatar imageUrl={PROFILE_DATA.avatarUrl} alt={`Logo ${PROFILE_DATA.name}`} />
        <ProfileHeader
          name={PROFILE_DATA.name}
          title={PROFILE_DATA.title}
          subtitle={PROFILE_DATA.subtitle}
        />

        <section className="w-full space-y-3 mt-8 animate-fade-in" aria-label="Links principais">
          {MAIN_LINKS.map((link) => (
            <LinkButton
              key={link.label}
              label={link.label}
              description={link.description}
              href={link.href}
              icon={link.icon}
              type={link.type}
            />
          ))}
        </section>

        <Footer fullName={FOOTER_DATA.fullName} />
      </main>
    </div>
  )
}
