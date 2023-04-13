import styles from 'styles/PageLinks.module.css'

function PageLinks({prevLink, currLink}: {prevLink: string, currLink: string}) {
    return (
        <div className={styles.pageLinks}>
            <a href="/design" className={styles.prevLink}>{prevLink}</a> <div className={styles.arrow}></div>
            <div className={styles.currLink}>{currLink.toUpperCase()}</div><div className={styles.arrow2}></div>
        </div>
    )
}

export default PageLinks