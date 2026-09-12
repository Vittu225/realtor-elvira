import { motion } from 'framer-motion'
import styles from './Services.module.css'

const services = [
  {
    title: 'Продажа и подбор',
    subtitle: 'Новостройки и вторичное жилье',
    text: 'Полный цикл работы: от анализа рынка и маркетинга вашей квартиры до поиска идеального жилья под ваш запрос.',
  },
  {
    title: 'Ипотека и консультация',
    subtitle: 'Бесплатное одобрение',
    text: 'Помогу выгодно одобрить ипотеку даже в сложных ситуациях. Первичная консультация по любым вопросам — бесплатно.',
  },
  {
    title: 'Юр. сопровождение',
    subtitle: 'Гарантия безопасности',
    text: 'Тщательная проверка объектов и участников сделки на всех этапах. Защита ваших интересов и финансов.',
  },
  {
    title: 'Реклама и доп. услуги',
    subtitle: 'Продвижение и коммунальные вопросы',
    text: 'Профессиональное продвижение ваших объектов на топ-площадках. Помощь в решении сопутствующих коммунальных вопросов.',
  },
]

const card = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Услуги</p>
        <h2 className={styles.heading}>Как я могу быть полезна</h2>
        <p className={styles.lead}>
          Один специалист на весь путь — без передачи «по цепочке» и скрытых комиссий.
        </p>

        <div className={styles.grid}>
          {services.map((item, i) => (
            <motion.article
              key={item.title}
              className={styles.card}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
            >
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p className={styles.subtitle}>{item.subtitle}</p>
              <p className={styles.text}>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
