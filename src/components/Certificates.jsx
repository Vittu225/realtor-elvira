import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import doc1 from '../assets/doc1.jpg'
import doc2 from '../assets/doc2.jpg'
import doc3 from '../assets/doc3.jpg'
import doc4 from '../assets/doc4.jpg'
import doc5 from '../assets/doc5.jpg'
import doc6 from '../assets/doc6.jpg'

const certificates = [
  { src: doc1, alt: 'Сертификат 1' },
  { src: doc2, alt: 'Сертификат 2' },
  { src: doc3, alt: 'Сертификат 3' },
  { src: doc4, alt: 'Сертификат 4' },
  { src: doc5, alt: 'Сертификат 5' },
  { src: doc6, alt: 'Сертификат 6' },
]

function Certificates() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  const closeLightbox = () => setActive(null)

  return (
    <section
      style={{
        padding: '60px 24px',
        textAlign: 'center',
        background: '#f7f7f7',
      }}
    >
      <h2
        style={{
          margin: '0 0 8px',
          fontSize: '32px',
          color: '#222',
        }}
      >
        Сертификаты
      </h2>
      <p
        style={{
          margin: '0 0 32px',
          fontSize: '16px',
          color: '#666',
        }}
      >
        Нажмите на сертификат, чтобы рассмотреть его в полном размере.
      </p>

      <div
        style={{
          display: 'flex',
          gap: '24px',                       
          overflowX: 'auto',
          padding: '8px 12px 24px',
          justifyContent: 'center',          
          flexWrap: 'wrap',                  
          maxWidth: '1200px',                
          margin: '0 auto',                  
        }}
      >
        {certificates.map((cert) => (
          <button
            key={cert.src}
            type="button"
            onClick={() => setActive(cert)}
            aria-label={`Открыть: ${cert.alt}`}
            style={{
              border: 'none',
              padding: 0,
              background: 'transparent',
              cursor: 'pointer',
              flex: '0 0 auto',
              transition: 'transform 0.2s ease', 
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'} 
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={cert.src}
              alt={cert.alt}
              style={{
                width: '160px',              
                height: '220px',             
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 6px 16px rgba(0, 0, 0, 0.12)', 
                display: 'block',
              }}
            />
          </button>
        ))}
      </div>

      {/*  */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            onClick={closeLightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: '24px',
            }}
          >
            <motion.img
              src={active.src}
              alt={active.alt}
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              style={{
                maxWidth: '95vw',
                maxHeight: '95vh',
                objectFit: 'contain',
                borderRadius: '4px',
                boxShadow: '0 0 30px rgba(0, 0, 0, 0.6)',
              }}
            />
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Закрыть"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#fff',
                fontSize: '28px',
                lineHeight: '44px',
                cursor: 'pointer',
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certificates

