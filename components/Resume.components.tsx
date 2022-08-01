import React from "react";
import { IconType } from "react-icons";
import { FaCalendar } from "react-icons/fa";
import styles from "../styles/Home.module.css";

interface Card {
  dateRange: string;
  title: string;
  desc: string;
}

export function ResumeCard(props: Card) {
  return (
    <div className={styles.timeline_item}>
      <div className={styles.circle_dot}></div>
      <h3 className={styles.timeline_date}>
        <i>
          <FaCalendar />
        </i>
        {props.dateRange}
      </h3>
      <h4 className={styles.timeline_title}>{props.title}</h4>
      <p className={styles.timeline_text}>
        {props.desc}
      </p>
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
