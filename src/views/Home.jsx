"use strict";

import styles from "./home.module.scss";
import img1 from "~/1.jpg";

export default function Home() {
  return (
    <div className={styles.homepage}>
      <p>home</p>
      <img src={img1} className={styles.img1} />
    </div>
  );
}
