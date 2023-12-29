import styles from './user.module.scss';

const UserAccount = () => {
  return (
    <div className={styles.user}>
        <h1>Мой профиль</h1>
        <div className={styles.user_card}>
            <div className={styles.user_header}>
                <h1>Основная информация</h1>
                <div>редактировать</div>
            </div>
            <div className={styles.content}>
                <ul>
                    <li>Имя</li>
                    <li>Фамилия</li>
                    <li>Пол</li>
                    <li>День рождения</li>
                    <li>Телефон</li>
                </ul>
                <ul>
                    <li>Альви</li>
                    <li>--</li>
                    <li>--</li>
                    <li>--</li>
                    <li>+7 999 000 99 98</li>
                </ul>
                <div className={styles.profile}><img src='https://cdn-icons-png.flaticon.com/512/847/847969.png' alt="" /></div>
            </div>
        </div>
        <div className={styles.user_card}>
            <div className={styles.user_header}>
                <h1>Предпочтения</h1>
                <div>редактировать</div>
            </div>
            <div className={styles.content}>
                <ul>
                    <li>Диетический суп-пюре с курицей</li>
                    <li>Яблочно-морковный рулет (диетический)</li>
                    <li>Индейка с кабачками и помидорами в духовке</li>
                    <li>Рыбные котлеты с кабачком в духовке</li>
                </ul>
                <ul>
                    <li> Подойдет тем, кто сидит на диете, или же для питания достаточно маленьких...</li>
                    <li>Низкокалорийный питательный рулет на десерт или перекус. </li>
                    <li>Все просто: диетическое мясо индейки, молодые кабачки и сочные помидоры.</li>
                    <li>-Подойдет тем, кто сидит на диете, или же для питания достаточно маленьких...</li>
                </ul>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default UserAccount