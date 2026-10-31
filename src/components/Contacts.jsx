import { motion } from 'framer-motion'
import styles from './Contacts.module.css'

const telegramUrl = 'https://t.me/elya2272'
const whatsappUrl =
  'https://wa.me/79275845875?text=' +
  encodeURIComponent('Здравствуйте, Эльвира! Хочу проконсультироваться по недвижимости.')
const instUrl = 'https://www.instagram.com/elvira_dee____?srtk=d3RoZG1zNm14eng4&utm_source=qr'

function Contacts() {
  return (
    <section className={styles.section} id="contacts">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Контакты</p>
        <h2 className={styles.heading}>Давайте обсудим вашу задачу</h2>
        <p className={styles.lead}>
          Напишите в удобный мессенджер — помогу с покупкой, продажей или ипотекой.
          Без давления и обещаний «на завтра».
        </p>

        <div className={styles.buttons}>
          <motion.a
            className={`${styles.btn} ${styles.telegram}`}
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
            whileTap={{ y: -1 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          >
            <TelegramIcon />
            Telegram
          </motion.a>

          <motion.a
            className={`${styles.btn} ${styles.instagram}`}
            href={instUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
            whileTap={{ y: -1 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          >
            <InstAppIcon />
            Instagram
          </motion.a>

          <motion.a
            className={`${styles.btn} ${styles.whatsapp}`}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -6 }}
            whileTap={{ y: -1 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          >
            <WhatsAppIcon />
            WhatsApp
          </motion.a>
        </div>
      </div>

      <footer className={styles.footer}>
        <span>Эльвира · риелтор</span>
        <span>Связаться по телефону - 8 927 584 5875</span>
        <span>Астрахань</span>
      </footer>
    </section>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path
        fill="currentColor"
        d="M21.5 4.3 18.4 19.6c-.23 1.02-.83 1.27-1.68.79l-4.64-3.42-2.24 2.16c-.25.25-.45.45-.92.45l.33-4.72 8.6-7.77c.37-.33-.08-.52-.58-.19L6.6 13.9 2.05 12.5c-.99-.31-.99-.99.21-1.47L20.3 3.6c.82-.31 1.54.18 1.2.7Z"
      />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path
        fill="currentColor"
        d="M20.5 3.5A11 11 0 0 0 3.1 17.4L2 22l4.7-1.1A11 11 0 1 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-2.77.65.66-2.7-.22-.35A9.1 9.1 0 1 1 12 20.5Zm5-6.82c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07a7.4 7.4 0 0 1-2.18-1.35 8.2 8.2 0 0 1-1.51-1.88c-.16-.27 0-.42.12-.55.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.64 1.11 2.82c.14.18 1.91 2.92 4.63 4.1.65.28 1.15.45 1.55.57.65.2 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32Z"
      />
    </svg>
  )
}

function InstAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}


export default Contacts
