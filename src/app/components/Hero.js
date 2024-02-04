import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = () => {

    return (
        <main className={styles.main}>
            <h1 className={styles.logo} href="#">haya<span className={styles.dot}>.</span></h1>
            <p className={styles.slogan}>// eleve o potencial do seu negócio com sites únicos e dinâmicos</p>
            <div className={styles.main_bg_wrapper}>
                <Image
                    className={styles.main_bg}
                    src="/gradient.png"
                    height={256}
                    width={1048}
                    quality={100}
                    alt="gradient bg"
                    priority
                />
            </div>
        </main>
    )
}

export default Hero;