import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navElements.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__wrapper}>
          <div className={styles.nav__logo}>
            <Link href="/">
              <a>
                <Image
                  className={styles.nav__logo__img}
                  src="/images/logo-500.png"
                  alt="logo for dev 30 27"
                  width={100}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <h2 className={styles.nav__logo__name}>
            <Link href="/">
              <a>Dev3027</a>
            </Link>
          </h2>
          <div className={styles.nav__specials}>
            &#40;
            <Link href="/salt-and-tar">
              <a>
                <h4>Salt&#38;Tar</h4>
              </a>
            </Link>
            <a href="https://hermitplus.com" rel="noopener" target="__blank">
              <h4>Hermits</h4>
            </a>
            {/* <Link href="/nutrasite">
              <a>
                <h4>NutraSite</h4>
              </a>
            </Link> */}
            <Link href="/car-wash">
              <a>
                <h4>Car Wash</h4>
              </a>
            </Link>
            &#41;
          </div>
        </div>
      </nav>
    </>
  );
}
