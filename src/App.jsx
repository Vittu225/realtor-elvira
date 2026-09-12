import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contacts from './components/Contacts'
import styles from './App.module.css'
import Certificates from './components/Certificates'

function App() {
  return (
    <div className={styles.page}>
      <Hero />
      <Certificates />
      <Services />
      <Reviews />
      <Contacts />
    </div>
  )
}

export default App
