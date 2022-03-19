import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/chara.svg" alt="Chibi Logo" className={styles.logo} />
      </footer>
    </>
  )
}
