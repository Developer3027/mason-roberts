import { ReactElement, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { skillData } from "../data/homeData";
import { FaAward, FaStar } from "react-icons/fa";

import SkillBadge from "../components/SkillBadge";
import QuickLinks from "../components/QuickLinks.component";
import MainLayout from "../components/layouts/MainLayout.component";
import {
  EduCard,
  ExpCard,
  ProjectCard,
  ServicesCard,
} from "../components/Card.component";

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
  let componentRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [formMsg, setFormMsg] = useState("");


  const submitToApi = (e: any) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      reason: reason,
      message: message
    }
    console.log("data from form: ", formData);
    fetch(
      "https://bn0q84bpl1.execute-api.us-east-1.amazonaws.com/development",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setFormMsg("email sent, thank you");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
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
                    {/* <Link className={styles.hero__link} href="/dash">
                      <a>
                        <div className={styles.hero__btnsOne}>
                          <p>Enter</p>
                        </div>
                      </a>
                    </Link> */}
                    <Link className={styles.hero__link} href="#contact">
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
              <div className={styles.section__group}>
                <h2>About</h2>
                <ReactToPrint
                  trigger={() => <button>Print</button>}
                  documentTitle="Mason Roberts Resume"
                  content={() => componentRef.current}
                />
              </div>
            </div>

            <div
              ref={componentRef}
              className="bg-white rounded p-2 hidden print:block">
              <div className="flex flex-col">
                <h1 className="text-4xl">Mason Roberts</h1>
                <span>2363 Eden Tr. Apt 103</span>
                <span>Rock Hill, SC, 29730</span>
                <span>
                  Email:{" "}
                  <span className="text-purple-900">
                    mroberts@dev-mason-roberts.com
                  </span>
                </span>
              </div>
              <div className="my-2">
                <h1 className="text-2xl mt-3 border-b border-slate-600">
                  Web / App Developer
                </h1>
                <p className="px-2 mt-1">
                  Certified and innovative <span>Full Stack Developer</span>{" "}
                  with proven experience working on both front-end and back-end
                  development. Skilled in Designing and developing smart,
                  elegant websites and apps quickly and efficiently with
                  exceptional user interfaces in a fast-paced environment. I
                  possess a strong grasp of Javascript, CSS, HTML as well as a
                  deep understanding of web standards and usability, plus a
                  solid design aesthetic.{" "}
                </p>
              </div>
              <div>
                <h1 className="text-2xl mt-3 border-b border-slate-600">
                  Core Competencies
                </h1>
                <div className="flex flex-wrap flex-col px-2 mt-1 h-24">
                  <span>Full-stack</span>
                  <span>Design UI / UX</span>
                  <span>Figma Design</span>
                  <span>Client Side Frameworks</span>
                  <span>Server Languages</span>
                  <span>Database Languages</span>
                  <span>Cloud Development</span>
                  <span>Agile / SCRUM Development</span>
                  <span>Version Control Github / Gitlab </span>
                  <span>Azure App / MSAL - Auth</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl mt-3 border-b border-slate-600">
                  Languages
                </h1>
                <div className="flex flex-wrap flex-col px-2 mt-3 h-24">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Javascript</span>
                  <span>Typescript</span>
                  <span>React</span>
                  <span>Next</span>
                  <span>Redux</span>
                  <span>Context</span>
                  <span>TailwindCss</span>
                  <span>Styled Components</span>
                  <span>Node</span>
                  <span>MySql</span>
                  <span>MariaDB</span>
                  <span>MongoDB</span>
                  <span>Prisma</span>
                  <span>TypeORM</span>
                  <span>Axios</span>
                  <span>Fetch</span>
                  <span>AWS</span>
                  <span>Azure</span>
                </div>
              </div>
              <div>
                <h1 className="text-2xl mt-4 border-b border-slate-600">
                  Experience
                </h1>
                <div>
                  <div className="flex justify-between px-1 mt-4 bg-slate-100">
                    <h1 className="font-bold mt-1">Autobell</h1>
                    <span>May 2022 to Aug 2022</span>
                  </div>
                  <div className="px-1">
                    <span>
                      Key Skills: Node / Javascript / Typescript / Next /
                      MongoDB / MySql / Prisma / Async code
                    </span>
                    <ul className="list-disc decoration-black px-1 mt-1 ml-2">
                      <li>
                        {" "}
                        Developed asynchronous Node scripts to make API calls
                        and write returned data into MongoDB collections.
                      </li>
                      <li>
                        {" "}
                        Wrote above script to loop through array of objects
                        which allowed script to use various inputs.
                      </li>
                      <li>
                        {" "}
                        Wrote above script to loop through API call until all
                        data returned.
                      </li>
                      <li>
                        {" "}
                        Wrote above script to check Mongo collection last
                        written record, retrieve a specific field and use to
                        filter API call.
                      </li>
                      <li>
                        {" "}
                        Wrote various tools to assist in developing above
                        scripts.
                      </li>
                      <li> Built concept for internal reports app in Next.</li>
                      <li>
                        {" "}
                        Configured personal Azure account to register app.
                      </li>
                      <li> Set up members and applied MSAL auth to app.</li>
                      <li> Protected routes with app roles.</li>
                      <li>
                        {" "}
                        Configured Prisma to pull data from on premises MariaDB
                        database.
                      </li>
                      <li> Configured Charts.</li>
                      <li>
                        {" "}
                        Configured ability for managers to print reports.
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between px-1 mt-4 bg-slate-100">
                    <h1 className="font-bold mt-1">
                      Fullstack Web Development
                    </h1>
                    <span>Oct 2019 to Aug 2022</span>
                  </div>
                  <div className="px-1">
                    <span>
                      Key Skills: Node / Javascript / Typescript / React / Next
                      / MongoDB / Async code / Design / HTML / CSS / AWS / Azure
                      / JSON / Git
                    </span>
                    <ul className="list-disc decoration-black px-1 mt-1 ml-2">
                      <li> Design various interfaces for various projects.</li>
                      <li> Build various projects in various frameworks.</li>
                      <li>
                        {" "}
                        Organize various projects with Git in Github and Gitlab
                      </li>
                      <li> Document various projects in Github and Gitlab</li>
                      <li>
                        {" "}
                        Style various projects using CSS and various CSS
                        Frameworks.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mt-1">Key Projects</h3>
                    <span className="font-medium border-b border-slate-500">
                      Hermit plus
                    </span>
                    <p>
                      Video Web applications that brings all the hermits of
                      hermitcraft into one place to better enjoy the hermits.
                      Easily find and track hermits.
                    </p>
                    <span className="font-medium border-b border-slate-500">
                      Salt and Tar
                    </span>
                    <p>
                      Video Web applications for the sailboat Rediviva and the
                      crew. Easily find video, photos, and shop to support the
                      channel.
                    </p>
                    <span className="font-medium border-b border-slate-500">
                      Erudition
                    </span>
                    <p>
                      Web applications built while studying for the Solution
                      Architect Associate exam.
                    </p>
                    <span className="font-medium border-b border-slate-500">
                      Nutrasite
                    </span>
                    <p>Ecommerce Web applications for nutrition supplements.</p>
                  </div>
                </div>
              </div>
              <div className="px-1 mt-2">
                <h1 className="font-bold mt-1 bg-slate-100">Education</h1>
                <div className="flex justify-between">
                  <h3>PluralSite</h3>
                  <span>On Going</span>
                </div>
                <div className="flex justify-between">
                  <h3>Lambda School</h3>
                  <span>2019 - 2021</span>
                </div>
                <div className="flex justify-between">
                  <h3>My Computer Career</h3>
                  <span>2018 - 2019</span>
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.about__content}>
                <div className={styles.row}>
                  <div className={styles.about__text}>
                    <h3>
                      Mason Roberts - <span>Web Architect</span>.
                    </h3>
                    <p>
                      I have always been into computer and tech. In 2019 I went
                      through my computer career.com and gained a few
                      certification. Learned how computers work about networking
                      and how the internet works and network security. In 2020 I
                      went through Lambda School and learned full stack
                      development. I learned Figma and designed many sites and
                      apps. In 2022 I learned AWS services, the resources and
                      tools available. Recently I assisted a widely known
                      carwash with an internal reports dashboard that was
                      authenticated through Microsoft using MSAL. I became very
                      familiar with Azure. Now I build web based solutions for
                      you. <br />
                      <br />
                      Skills: HTML, CSS, Javascript, Node, React, Next, Express,
                      Nest, Sql, Mongo, Mongoose, Prisma, TypeORM, AWS, Azure
                    </p>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.about__text}>
                    <div className={styles.about__cert}>
                      <div className={styles.about__cert__link}>
                        <FaStar />
                        <a href="#about">Azure</a>
                      </div>
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
                          Website: <span>www.dev-mason-roberts.com</span>
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
              {templateData.map((item) => (
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
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.section__title}>
                <h2>Contact Form</h2>
              </div>
            </div>
            <div className={styles.row}>
              <div className="w-full max-w-sm">
                <form id="contact-form" className="w-full text-white">
                  <div className="">
                    {/* //^ for error / help message */}
                    <p id="p1" className="text-green-600">
                      {formMsg}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded p-1 my-2 text-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded p-1 my-2 text-black"
                    />
                  </div>
                  <div className="">
                    <p>Select One</p>
                    <div className="">
                      <input
                        type="radio"
                        id="reason"
                        name="reason"
                        value="general"
                        onChange={(e) => setReason(e.target.value)}
                        className="mx-2"
                      />
                      <label>General</label>
                    </div>
                    <div className="inputChoice">
                      <input
                        type="radio"
                        id="reason"
                        name="reason"
                        value="employment"
                        onChange={(e) => setReason(e.target.value)}
                        className="mx-2"
                      />
                      <label>I would like to offer you employment.</label>
                    </div>
                    <div className="inputChoice">
                      <input
                        type="radio"
                        id="reason"
                        name="reason"
                        value="freelancing"
                        onChange={(e) => setReason(e.target.value)}
                        className="mx-2"
                      />
                      <label>I would like to hire you freelancing.</label>
                    </div>
                  </div>
                  <div className="">
                    <label htmlFor="message" className="mt-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      cols={4}
                      rows={5}
                      id="message"
                      placeholder="How can I help you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full my-1 text-black"></textarea>
                  </div>
                  <div className="buttonWrap">
                    <button type="submit" onClick={(e) => submitToApi(e)}>
                      Find Diamonds
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(Home: ReactElement) {
  return <MainLayout>{Home}</MainLayout>;
};
