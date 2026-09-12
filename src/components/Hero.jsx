import { motion } from 'framer-motion'
import avatar from '../assets/avatar.jpg'
import styles from './Hero.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function scrollToContacts() {
  document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })
}

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <header className={styles.nav}>
        <span className={styles.brand}>Эльвира</span>
        <nav className={styles.links} aria-label="Навигация">
          <a href="#services">Услуги</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>

      <div className={styles.grid}>
        <div className={styles.copy}>
          <motion.p
            className={styles.eyebrow}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.05}
          >
            Частный риелтор · Астрахань
          </motion.p>

          <motion.h1
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.18}
          >
            Честная недвижимость: покупка и продажа квартир в Астрахани
          </motion.h1>

          <motion.p
            className={styles.lead}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.32}
          >
            Сопровождаю сделки от первого просмотра до ключей. Прозрачные условия,
            спокойный темп и внимание к деталям — чтобы вы приняли решение уверенно.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.46}
          >
            <button type="button" className={styles.cta} onClick={scrollToContacts}>
              Связаться
            </button>
            <span className={styles.note}>Ответ в течение дня · без навязывания</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.portraitWrap}
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.portraitFrame}>
            <img
              src={avatar}
              alt="Эльвира, риелтор"
              className={styles.portrait}
            />
          </div>
          <p className={styles.caption}>Эльвира · сопровождение сделок с жильём</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
