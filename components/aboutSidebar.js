import styles from "../styles/sidebar.module.css";

export default function AboutSidebar({ slideState }) {
  return <h3 className={[styles.sidebarText, slideState].join(" ")}>about</h3>;
}
