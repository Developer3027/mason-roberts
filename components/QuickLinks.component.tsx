
import Image from "next/image";
import Link from "next/link";
import Tooltip from "./Tooltip.component";
import styles from "../styles/Home.module.css";

// styles.hero__quick__links

export default function QuickLinks() {

  return (
    <>
      <div className={styles.hero__quick__links}>
        <Tooltip tooltipText="Salt and Tar">
          <Link href="/salt-and-tar">
            <a>
              <Image
                src="/images/logo.svg"
                alt="dev 30 27"
                width={76}
                height={76}
              />
            </a>
          </Link>
        </Tooltip>
        <Tooltip tooltipText="Hermit Plus">
          <Link href="/hermits">
            <a>
              {/* <a href="https://hermitplus.com" rel="noopener" target="__blank"> */}
              <Image
                src="/images/Hermit_logo.svg"
                alt="hermit plus"
                width={76}
                height={76}
              />
            </a>
          </Link>
        </Tooltip>
        {/* <Tooltip tooltipText="Nutra Site">
          <Link href="">
            <a>
              <Image
                src="/images/Nutra-Logo.svg"
                alt="nutra site"
                width={76}
                height={76}
              />
            </a>
          </Link>
        </Tooltip> */}
        <Tooltip tooltipText="Car Wash">
          <Link href="/car-wash">
            <a>
            {/* <a href="https://carwash-black.vercel.app" target="__blank"> */}
              <Image
                src="/images/carwash.png"
                alt="car wash site"
                width={96}
                height={76}
              />
            </a>
          </Link>
        </Tooltip>
      </div>
    </>
  );
}