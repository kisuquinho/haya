'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./Header.module.scss";

const Header = () => {

    const pathName = usePathname()

    const hrefHome = "/";
    const hrefAbout = "/about";
    const hrefWork = "/work";

    return (
        <header className={styles.header}>
            <a className={styles.logo} href="#">haya<span className={styles.dot}>.</span></a>
            <nav className={styles.nav}>
                <Link href={hrefHome} className={pathName === hrefHome ? 'active' : 'disabled'} key="home">Home</Link>
                <div className={styles.divider}></div>
                <Link href={hrefAbout} className={pathName === hrefAbout ? 'active' : 'disabled'} key="about">Sobre</Link>
                <div className={styles.divider}></div>
                <Link href={hrefWork} className={pathName === hrefWork ? 'active' : 'disabled'} key="portfolio">Portfólio</Link>
            </nav>
            <a className={styles.a} href="https://api.whatsapp.com/send?phone=5533999904680&text=Olá!" target="_blank" rel="noopener noreferrer">Contato</a>
        </header>
    )
}

export default Header;