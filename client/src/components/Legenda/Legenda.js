import React from "react";
import styles from "./legenda.module.css";

export default function Legenda() {
    const handleClick = () => {
        console.log("I was cliked");
    };

    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.vezana}>
                <div className={styles.violet}></div>
                <div>vezana djelatnost</div>
            </div>
            <div className={styles.slobodna} onClick={handleClick}>
                <div className={styles.blue}></div>
                <div>slobodna djelatnost</div>
            </div>
            <div className={styles.povlastena} onClick={handleClick}>
                <div className={styles.red}></div>
                <div>povlaštena djelatnost</div>
            </div>
        </div>
    );
}
