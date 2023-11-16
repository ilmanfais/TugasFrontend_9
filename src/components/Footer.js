import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer_title}>Mobile Legends Hero App</h2>
                <p className={styles.footer_author}>Created by IlmanFais</p>
            </footer>
        </div>
    );
}

export default Footer;