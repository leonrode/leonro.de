import styles from "../styles/sidebar.module.css";

export default function WorkSidebar({ slideState }) {
  return <h3 className={[styles.sidebarText, slideState].join(" ")}>work</h3>;
}
