import styles from "../styles/sidebar.module.css";

export default function SkillsSidebar({ slideState }) {
  return <h3 className={[styles.sidebarText, slideState].join(" ")}>skills</h3>;
}
