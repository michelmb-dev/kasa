import styles from './Banner.module.css'

function Banner({ background, styleHeight, children }) {
  return (
    <section
      className={`${styles.wrapper} ${
        styleHeight !== undefined ? styleHeight : ''
      }`}
    >
      <img src={background} alt='Vue sur les montagnes' />
      {children}
    </section>
  )
}

export default Banner
