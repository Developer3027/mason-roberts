import {ReactElement} from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { skillData } from "../data/homeData";
import {
  FaAward,
} from "react-icons/fa";

import SkillBadge from "../components/SkillBadge";
import QuickLinks from "../components/QuickLinks.component";
import MainLayout from "../components/layouts/MainLayout.component";
import { EduCard, ExpCard, ProjectCard, ServicesCard } from "../components/Card.component";

import {
  experience,
  education,
  services,
  templateData,
} from "../data/homeData";
import styles from "../styles/Home.module.css";
//import type { PageLayout } from "./_app";

export default function Home<PageLayout>() {
  const serviceIconStyle = { color: "darkslategrey", fontSize: "36px" };
  return (
    <div>
      <Head>
        <title>Mason Roberts | Dev3027</title>
        <meta
          name="description"
          content="Mason Roberts portfolio site. Web development. Fullstack, frontend, backend, development with node and react."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="home" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.hero__container}>
              <div className={styles.hero__wrapper}>
                <div className={styles.hero__leftEdge}>
                  <p>Mason Roberts</p>
                </div>
                <div className={styles.hero__outer}>
                  <div className={styles.hero__inner}>
                    <div className={styles.hero__warning}>
                      <p className="text-red-400">
                        For best results, please view on tablet or larger screen
                        and on a chrome or chromium browser.
                      </p>
                    </div>
                    <QuickLinks />
                    <div>
                      <p className={styles.hero__top}>
                        A{" "}
                        <span className={styles.hero__hl}>
                          digital designer
                        </span>{" "}
                        and{" "}
                        <span className={styles.hero__hl}>
                          fullstack developer
                        </span>{" "}
                        living in the Carolinas, United States.
                      </p>
                    </div>
                    <div>
                      <p className={styles.hero__mid}>
                        If you would like to know more about me, or are
                        interested in my work, you can contact me at{" "}
                        <span className={styles.hero__hl}>
                          dev3027@mason-roberts.com
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className={styles.hero__btns}>
                    <Link className={styles.hero__link} href="/dash">
                      <a>
                        <div className={styles.hero__btnsOne}>
                          <p>Enter</p>
                        </div>
                      </a>
                    </Link>
                    <Link className={styles.hero__link} href="/contact">
                      <a>
                        <div className={styles.hero__btnsTwo}>
                          <p>Contact Me</p>
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div className={styles.hero__title}>
                    <p className={styles.hero__text}>Developer3027</p>
                  </div>
                </div>

                <div className={styles.hero__pic}>
                  <img
                    className={styles.hero__img}
                    src="/images/binary-code-amico.svg"
                    alt="yep"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <div className="row">
              <div className={styles.section__title}>
                <h2>About</h2>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.about__content}>
                <div className={styles.row}>
                  <div className={styles.about__text}>
                    <h3>
                      I&apos;m Mason Roberts, a <span>Web Architect</span>.
                    </h3>
                    <p>
                      I have always been into computer and tech. In 2019 I went
                      through my computer career.com and gained a few
                      certification. Learned how computers work about networking
                      and how the internet works and network security. In 2020 I
                      went through Lambda School and learned full stack
                      development. I learned Figma and designed many sites and
                      apps. In 2022 I learned AWS services, the resources and
                      tools available. Recently I assisted a widely known carwash with an internal reports dashboard that was authenticated through Microsoft using MSAL. I became very familiar with Azure. Now I build web based solutions for you.
                    </p>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.about__text}>
                    <div className={styles.about__cert}>
                      <div className={styles.about__cert__link}>
                        <FaAward />
                        <a
                          href="/certificates/CertificateOfCompletion_SAAC02.pdf"
                          target="_blank"
                          rel="noreferrer">
                          AWS SAA Course
                        </a>
                      </div>
                      <div className={styles.about__cert__link}>
                        <FaAward />
                        <a
                          href="/certificates/LE-1.pdf"
                          target="_blank"
                          rel="noreferrer">
                          Linux Essentials
                        </a>
                      </div>
                      <div className={styles.about__cert__link}>
                        <FaAward />
                        <a
                          href="/certificates/Certificate_Programming_ Fundamentals.pdf"
                          target="_blank"
                          rel="noreferrer">
                          Program Fundamentals
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.about__info}>
                  <div className={styles.about__personal__info}>
                    <div className={styles.about__personal}>
                      <div className={styles.about__info__item}>
                        <p>
                          LinkedIn:{" "}
                          <span>www.linkedin.com/in/mason-roberts-3027</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Age: <span>50</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Website: <span>www.mason-roberts.com</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Email: <span>mrobe18@gmail.com</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Degree: <span>Online</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Country: <span>United States</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          State: <span>South Carolina</span>
                        </p>
                      </div>
                      <div className={styles.about__info__item}>
                        <p>
                          Freelance: <span>Available</span>
                        </p>
                      </div>
                    </div>
                    <div className={styles.about__skills}>
                      {skillData.map((item, i) => (
                        <SkillBadge
                          key={i}
                          skill={item.skill}
                          description={item.description}
                          flag={item.flag}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.specs__info}>
                <div className={styles.education}>
                  <h3 className={styles.title}>Education</h3>
                  <div className={styles.row}>
                    <div className={styles.timeline_box}>
                      <div id="education" className={styles.timeline}>
                        {education.map((item) => (
                          <EduCard
                            key={item.id}
                            dateRange={item.dateRange}
                            title={item.title}
                            desc={item.desc}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.experience}>
                  <h3 className={styles.title}>Experience</h3>
                  <div className={styles.row}>
                    <div className={styles.timeline_box}>
                      <div id="experience" className={styles.timeline}>
                        {experience.map((item) => (
                          <ExpCard
                            key={item.id}
                            dateRange={item.dateRange}
                            linkTag={item.linkTag}
                            title={item.title}
                            desc={item.desc}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.section__title}>
                <h2>Services</h2>
              </div>
            </div>
            <div className={styles.card__row}>
              {services.map((item) => (
                <ServicesCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="templates" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.section__title}>
                <h2>Templates</h2>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.about__text}>
                <p>
                  Here are some of the completed HTML, CSS, and JS projects I
                  have created that you can use as templates for free. Many are
                  modified versions of online tutorials. These include the
                  github repo, video link, general information on the template
                  and a live example. This is everything you need to get you
                  started as quick as possible.
                </p>
              </div>
            </div>
            <div className={styles.row2}>
              {templateData.map(item => (
                <ProjectCard
                  key={item.id}
                  imageUrl={item.imageUrl}
                  subText={item.subText}
                  tagOneUrl={item.tagOneUrl}
                  btnOneTxt={item.btnOneTxt}
                  tagTwoUrl={item.tagTwoUrl}
                  btnTwoTxt={item.btnTwoTxt}
                  tagThreeUrl={item.tagThreeUrl}
                  btnThreeTxt={item.btnThreeTxt}
                />
              ))}
            </div>
            {/* <div class="row">
            <div class="portfolio-heading">
              <h2>Current Projects</h2>
            </div>
          </div>
          <div class="row">
            <!-- Portfolio Item -->
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/erudition.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/hermitplus.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/kathryn-roberts.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/music-found.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/saltar.png" alt="">
                </div>
              </div>
            </div>
            <div class="portfolio-item padd-15">
              <div class="portfolio-item-inner dark-shadow">
                <div class="portfolio-img">
                  <img src="images/portfolio/amazon.png" alt="">
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(Home: ReactElement) {
  return <MainLayout>{Home}</MainLayout>;
};
