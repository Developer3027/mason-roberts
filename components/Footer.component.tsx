import Link from "next/link";
import Image from "next/image";
import styles from "../styles/layout.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__main}>
          <h1 className={styles.footer__h1}>Dev3027</h1>
          {/* <p className={styles.footer__p}>dev3027@mason-roberts.com</p> */}
        </div>
        <div className={styles.footer__mid}>
          <Link href="/">
            <a>
              <Image
                className={styles.footer__logo__img}
                src="/images/logo-500.png"
                alt="dev 30 27"
                width={100}
                height={100}
              />
            </a>
          </Link>
        </div>

        <div className={styles.footer__div}>
          <ul>
            <Link href="/">
              <a>
                <li>Home</li>
              </a>
            </Link>
            <Link href="/#contact">
              <a>
                <li>Contact</li>
              </a>
            </Link>
          </ul>
        </div>

        <div className={styles.footer__div}>
          <ul>
            <a
              href="https://www.linkedin.com/in/mason-roberts-3027/"
              target="_blank"
              rel="noreferrer">
              <li>LinkedIn</li>
            </a>
            <a
              href="https://twitter.com/Developer3027"
              target="_blank"
              rel="noreferrer">
              <li>Twitter</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
