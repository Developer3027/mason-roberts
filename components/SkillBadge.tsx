import styles from "../styles/Home.module.css";

interface Skill {
    flag: string;
    skill: string;
    description: string;
  }

function SkillBadge(props: Skill) {
  let clr;
  if (props.flag === "g") {
    clr = styles.skill__infog;
  } else if (props.flag === "b") {
    clr = styles.skill__infob;
  } else {
    clr = styles.skill__infoo;
  }

  return (
    <div className={styles.about__skill__item}>
      <div className={styles.skill__type}>{props.skill}</div>
      <div className={clr}>{props.description}</div>
    </div>
  );
}

export default SkillBadge;
