import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import review1 from '../assets/review1.jpg'
import review2 from '../assets/review2.jpg'
import review3 from '../assets/review3.jpg'
import styles from './Reviews.module.css'

const reviews = [
  { src: review1, alt: 'Отзыв из переписки: Анна' },
  { src: review2, alt: 'Отзыв из переписки: Дмитрий' },
  { src: review3, alt: 'Отзыв из переписки: Мария' },
]

function Reviews() {
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

  return (
    <section className={styles.section} id="reviews">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Отзывы</p>
        <h2 className={styles.heading}>Слова клиентов из переписок</h2>
        <p className={styles.lead}>
          Реальные скриншоты. Нажмите на снимок, чтобы прочитать переписку целиком.
        </p>

        <div className={styles.gallery}>
          {reviews.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              className={styles.thumb}
              onClick={() => setActive(item)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              aria-label={`Открыть ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className={styles.lightbox}
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр отзыва"
          >
            <motion.img
              src={active.src}
              alt={active.alt}
              className={styles.lightboxImage}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />
            <p className={styles.hint}>Нажмите в любом месте, чтобы закрыть</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Reviews
