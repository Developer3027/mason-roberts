import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaCalendar } from "react-icons/fa";
import styles from "../styles/Home.module.css";

interface EdCard {
  dateRange: string;
  title: string;
  desc: string;
}

export function EduCard(props: EdCard) {
  return (
    <div className={styles.timeline_item}>
      <div className={styles.circle_dot}></div>
      <h3 className={styles.timeline_date}>
        <i>
          <FaCalendar />
        </i>
        {props.dateRange}
      </h3>
      <h4 className={styles.timeline_title}>
          {props.title}
      </h4>
      <p className={styles.timeline_text}>{props.desc}</p>
    </div>
  );
}

interface ExCard {
  dateRange: string;
  linkTag: string;
  title: string;
  desc: string;
}

export function ExpCard(props: ExCard) {
  return (
    <div className={styles.timeline_item}>
      <div className={styles.circle_dot}></div>
      <h3 className={styles.timeline_date}>
        <i>
          <FaCalendar />
        </i>
        {props.dateRange}
      </h3>
      <h4 className={styles.timeline_title__link}>
        <Link href={props.linkTag}>
          <a>{props.title}</a>
        </Link>
      </h4>
      <p className={styles.timeline_text}>{props.desc}</p>
    </div>
  );
}

interface SrvCard {
  icon: IconType;
  title: string;
  desc: string;
}
export function ServicesCard(props: SrvCard) {
  const serviceIconStyle = { color: "darkslategrey", fontSize: "36px" };
  return (
    <div className={styles.service__item}>
      <div className={styles.service__item__inner}>
        <div className={styles.service__icons}>
          {React.createElement(props.icon, {style: serviceIconStyle})}
        </div>
        <h4>{props.title}</h4>
        <p>
          {props.desc}
        </p>
      </div>
    </div>
  );
}

//^ future - ref https://codesandbox.io/s/interesting-http-1dehy?file=/src/styles.css
// interface ProjectProps {
//   title: string;
//   subtext: string;
//   imageUrl: string;
// }

// export function ProjectCard(props: ProjectProps) {
//   return (
//     <figure className={styles.port__figure}>
//       <img src={props.imageUrl} alt="background" />
//       <figcaption>
//         <div>
//           <h2>{props.title}</h2>
//           <p>{props.subtext}</p>
//         </div>
//       </figcaption>
//     </figure>
//   )
// }

interface ProjectProps {
  imageUrl: string;
  subText: string;
}

export function ProjectCard(props: ProjectProps) {
  return (
    <figure className={styles.port__figure}>
      <img src={props.imageUrl} alt="background" />
      <figcaption className="text-white p-1">{props.subText}</figcaption>
      <div className="flex justify-evenly w-full mt-2 pb-3">
        <a
          href="https://gitlab.com/Dev3027/volvo-electric"
          target="__blank"
          rel="noreferrer">
          <button className="text-white border border-slate-200 rounded-md w-20 py-1">
            Gitlab
          </button>
        </a>
        <a
          href="https://www.udemy.com/share/105Pgi3@fLJeowilVIMdBKpV5OSB5nOt_sH-KY_TdbCYHh0fP8LBrtG_Js-JFZUQRQUb_Ks4/"
          target="__blank"
          rel="noreferrer">
          <button className="text-white border border-slate-200 rounded-md w-20 py-1">
            Learn
          </button>
        </a>
        <a
          href="https://dev3027.gitlab.io/volvo-electric/"
          target="__blank"
          rel="noreferrer">
          <button className="text-white border border-slate-200 rounded-md w-20 py-1">
            Site
          </button>
        </a>
      </div>
    </figure>
  );
}
