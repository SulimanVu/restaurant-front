import styles from './brain.module.scss'

const BrainPage = () => {
  return (
    <div className={styles.brain}>
        <div className={styles.title1}>ЛУЧШИЕ РЕСТОРАНЫ МОСКВЫ</div>
        <hr />
        <div className={styles.title2}>ВЫБЕРИ И ЗАБРОНИРУЙ</div>
        <div className={styles.title3}>4 130 ресторанов в Москве <hr/></div>

        <div className={styles.inp}>
        <input type="text" placeholder='Введите название, кухню или тип заведения'/> <button>Поиск</button>
        </div>
    </div>
  )
}

export default BrainPage