import React from "react";
import styles from "./opis.module.css";

export default function Opis() {
    return (
        <div className={styles.container}>
            <div className={styles.iks}>X</div>
            <div className={styles.border}>
                <div className={styles.kvalifikacije}>Kvalifikacije:</div>
                <div className={styles.opis}>Opis djelatnosti</div>
            </div>
        </div>
    );
}
