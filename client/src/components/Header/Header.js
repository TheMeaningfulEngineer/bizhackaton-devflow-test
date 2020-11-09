import React from "react";
import styles from "./header.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="/images/logo.png" alt="logo" />
            <div className={styles.links}>
                <div>Upute</div>
                <div>Moja Lista</div>
            </div>
        </div>
    );
}
