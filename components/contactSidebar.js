import styles from "../styles/sidebar.module.css";

export default function ContactSidebar({ slideState }) {
  return (
    <h3 className={[styles.sidebarText, slideState].join(" ")}>contact</h3>
  );
}
