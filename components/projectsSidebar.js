import styles from "../styles/sidebar.module.css";

export default function ProjectsSidebar({ slideState }) {
  return (
    <h3 className={[styles.sidebarText, slideState].join(" ")}>projects</h3>
  );
}
