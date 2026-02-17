import { useState, useEffect } from 'react'

export default function Avatar({ imageUrl, alt }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = imageUrl
    img.onload = () => setIsLoaded(true)
  }, [imageUrl])

  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-[140px] h-[140px]">
        <div
          className="absolute inset-0 rounded-full animate-gradient-rotate"
          style={{
            background: 'conic-gradient(from 0deg, #B76E79, #D4A0A7, #C9956B, #E8D5C8, #B76E79)'
          }}
        ></div>

        <div
          className={`
            absolute inset-[3px] rounded-full overflow-hidden
            bg-background-avatar
            ${isLoaded ? 'animate-fade-in' : 'opacity-0'}
          `}
        >
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
