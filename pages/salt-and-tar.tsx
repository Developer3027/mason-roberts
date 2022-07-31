import { ReactElement, useState } from "react";

import SinglePageLayout from "../components/layouts/SingleLayout.component";
import styles from "../styles/saltAndTar.module.css";

export default function SaltAndTar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <main className={styles.st__body}>
        <section id="home" className={styles.st__header__section}>
          <header className={styles.st__header}>
            <div className={styles.st__navbar}>
              <div className={styles.st__nav__container}>
                <a href="#home" className={styles.st__brand}>
                  <img
                    className={styles.st__nav__logo}
                    src="/images/st/logo.svg"
                  />
                </a>
              </div>
            </div>
          </header>
        </section>

        <section id="home" className={styles.st__container}>
          <div className={styles.st__wrap}>
            <div className={styles.st__hero}>
              <div className={styles.st__title__info}>
                <h1 className={styles.st__hero__title}>Salt and Tar</h1>
                <h3 className={styles.st__sub__title}>
                  Journey of a wooden boat
                </h3>
                <div className={styles.st__hero__actions}>
                  <a href="#about" className={styles.st__learn__more__btn}>
                    Learn More
                  </a>
                  <a href="#support" className={styles.st__help__build__btn}>
                    Help Build
                  </a>
                </div>
              </div>
              <div className={styles.st__hero__img__wrap}>
                <img
                  className={styles.st__hero__tag}
                  src="/images/st/Group 8.png"
                  alt="Salt and Tar"
                />
              </div>
            </div>
            <div className={styles.st__arrow__wrap}>
              <img src="/images/st/Group 28.svg" alt="border bottom" />
            </div>
          </div>
        </section>
        {/* promo section */}
        <section id="promotion" className={styles.st__container__promo}>
          <div className={styles.st__wrap__promo}>
            <div className="flex justify-between items-center mt-4">
              <div className={styles.st__promo__title}>
                <h1>New</h1>
              </div>
              <div>
                <img
                  className={styles.st__nav__logo}
                  src="/images/st/logo.svg"
                />
              </div>
              <div className={styles.st__promo__title}>
                <h1>Wind</h1>
              </div>
            </div>
            <div className="max-w-md px-2 mb-3">
              <p className={styles.st__promo_p}>
                This is a fan site built by me, Developer3027. Below you can
                find different ways to help Salt and Tar build Rediviva.
              </p>
            </div>
            <div className="flex mb-4 w-full">
              <div className="md:flex flex-col justify-evenly w-full md:w-1/2 hidden">
                <div className="md:flex justify-evenly hidden my-3 w-full">
                  <div className={styles.st__promo__infocard}>
                    <h1 className={styles.st__promo__infotitle}>YouTube</h1>
                    <p className={styles.st__promo__infosub}>69K</p>
                    <small className={styles.st__promo__infosmall}>
                      subscribers
                    </small>
                  </div>
                  <div className={styles.st__promo__infocard}>
                    <h1 className={styles.st__promo__infotitle}>Instagram</h1>
                    <p className={styles.st__promo__infosub}>6K</p>
                    <small className={styles.st__promo__infosmall}>
                      followers
                    </small>
                  </div>
                </div>

                <div className="md:flex justify-evenly hidden my-3 w-full">
                  <div className={styles.st__promo__infocard}>
                    <h1 className={styles.st__promo__infotitle}>Patreon</h1>
                    <p className={styles.st__promo__infosub}>283</p>
                    <small className={styles.st__promo__infosmall}>
                      members
                    </small>
                  </div>
                  <div className={styles.st__promo__infocard}>
                    <h1 className={styles.st__promo__infotitle}>Supporters</h1>
                    <p className={styles.st__promo__infosub}>100%</p>
                    <small className={styles.st__promo__infosmall}>
                      satisfied
                    </small>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-around w-full md:w-1/2">
                <div className="flex flex-col w-full pl-2 border-l-4 border-st-secondary mx-1 my-2">
                  <h1 className={styles.st__promo__infotitle}>Patreon</h1>
                  <p className={styles.st__promo_p}>
                    A membership platform used to provide rewards and perks to
                    subscribers.
                  </p>
                </div>
                <div className="flex flex-col w-full pl-2 border-l-4 border-st-secondary mx-1 my-2">
                  <h1 className={styles.st__promo__infotitle}>YouTube</h1>
                  <p className={styles.st__promo_p}>
                    A video sharing platform used to share the journey of
                    building Rediviva.
                  </p>
                </div>
                <div className="flex flex-col w-full pl-2 border-l-4 border-st-secondary mx-1 my-2">
                  <h1 className={styles.st__promo__infotitle}>Instagram</h1>
                  <p className={styles.st__promo_p}>
                    A image sharing platform used to share pictures of the
                    adventures in building Rediviva.
                  </p>
                </div>
                <div className="flex flex-col w-full pl-2 border-l-4 border-st-secondary mx-1 my-2">
                  <h1 className={styles.st__promo__infotitle}>GoFundMe</h1>
                  <p className={styles.st__promo_p}>
                    A crowdfunding platform used to raise funding for building
                    Rediviva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* video section */}
        <section id="video" className={styles.st__container__video}>
          <div className={styles.st__video__begin}></div>
          <div className={styles.st__container__video}>
            <div className={styles.st__wrap__video}>
              <div className="flex flex-col mt-4 md:w-1/2">
                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center w-[320px]">
                    <div className="flex w-full justify-end -mb-7 pr-3">
                      <span className="font-fell text-4xl text-white text-end">
                        Salt and Tar
                      </span>
                    </div>
                    <div className="flex justify-start w-full">
                      <h1 className="font-fell text-9xl text-white">Video</h1>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center md:hidden bg-white rounded-xl w-[350px] h-full">
                  <p className="px-3 py-7">
                    The videos here are the same ones found on the YouTube
                    channel and use the same url. They are just presented in a
                    different style here. Here you will find only Salt and Tar
                    content organized into easy to follow playlists. Subscribe
                    to get access to full content and 10% of your subscription
                    will be donated to Salt and Tar.
                  </p>
                  <button className="border-2 border-st-secondary rounded-lg mb-4 px-6 py-2">
                    Login
                  </button>
                </div>
                <div className="md:relative my-8 z-10 lg:ml-32">
                  <img
                    src="/images/st/Video_Home.png"
                    alt="border bottom"
                    className="border-4 border-st-secondary rounded-lg md:absolute top-0 left-8"
                    width={350}
                  />
                </div>
              </div>

              <div className="hidden md:flex justify-center md:w-1/2">
                <div className="hidden md:flex flex-col items-center bg-white rounded-xl w-[350px] h-full">
                  <p className="px-3 py-7">
                    The videos here are the same ones found on the YouTube
                    channel and use the same url. They are just presented in a
                    different style here. Here you will find only Salt and Tar
                    content organized into easy to follow playlists. Subscribe
                    to get access to full content and 10% of your subscription
                    will be donated to Salt and Tar.
                  </p>
                  <button className="border-2 border-st-secondary rounded-lg mb-4 px-6 py-2">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

SaltAndTar.getLayout = function getLayout(SaltAndTar: ReactElement) {
  return <SinglePageLayout>{SaltAndTar}</SinglePageLayout>;
};
