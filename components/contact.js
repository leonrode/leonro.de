import Image from "next/image";

import twitterSvg from "../public/twitter.svg";
import githubSvg from "../public/github.svg";
import mailSvg from "../public/mail.svg";
import discordSvg from "../public/discord-logo.svg";

import styles from "../styles/contact.module.css";
import dividerStyle from "../styles/divider.module.css";

import { isMobile } from "react-device-detect";

export default function Contact({ slideState }) {
  const ICON_SIZE = isMobile ? "40" : "60";
  return (
    <div className={[styles.contact, slideState].join(" ")}>
      <h5 className={dividerStyle.mobileDivider}>contact</h5>
      <h2 className={styles.header}>
        You can contact me through any {!isMobile ? <br /> : ""}of the following
        platforms
      </h2>

      <div className={styles.contactOptions}>
        <div className={styles.contactOptionContainer}>
          <a href="https://twitter.com/leonrode221">
            <Image
              src={twitterSvg}
              alt="twitter logo"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </a>
          <h5 className={styles.contactOptionText}>twitter</h5>
        </div>
        <div className={styles.contactOptionContainer}>
          <a href="https://github.com/leonrode">
            <Image
              src={githubSvg}
              alt="github logo"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </a>
          <h5 className={styles.contactOptionText}>github</h5>
        </div>
        <div className={styles.contactOptionContainer}>
          <a href="mailto:leon.rode13@gmail.com">
            <Image
              src={mailSvg}
              alt="email logo"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </a>
          <h5 className={styles.contactOptionText}>email</h5>
        </div>
        <div className={styles.contactOptionContainer}>
          <Image
            src={discordSvg}
            alt="discord logo"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
          <h5 className={styles.contactOptionText}>lionrocker#3960</h5>
        </div>
      </div>
    </div>
  );
}
