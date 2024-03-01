import styles from "./Footer.module.scss";

const contacts = [
    {
        id: 'email',
        icon: '/email.svg',
        alt: 'Ícone de email',
        text: "joyciane.pinto @ufv.br",
    },
    {
        id: 'phone',
        icon: '/phone.svg',
        alt: 'Ícone de telefone',
        text: "(33) 99990-4680",
    },
    {
        id: 'adress',
        icon: '/adress.svg',
        alt: 'Ícone de endereço',
        text: "Viçosa, Minas Gerais",
    },
]

const Footer = () => {

    return (
        <footer className={styles.footer}>
            {contacts.map((contact) => {
                return (
                    <div className={styles.contact}>
                        <img className={styles.icon} src={contact.icon} alt={contact.alt} />
                        <p className={styles.text}>{contact.text}</p>
                    </div>
                )
            })}
            <div className={styles.info}>
                <p className={styles.info_text}>©2024 haya.studio</p>
                <div className={styles.socials}>
                    <a className={styles.social_icon} href="http://" target="_blank" rel="noopener noreferrer"><img src="/dribbble.svg" alt="Dribble Icon" /></a>
                    <a className={styles.social_icon} href="http://" target="_blank" rel="noopener noreferrer"><img src="/github.svg" alt="Github icon" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;