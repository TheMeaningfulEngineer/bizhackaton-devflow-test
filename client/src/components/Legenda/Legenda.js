import React from "react";
import styles from "./legenda.module.css";

export default function Legenda({ addColorFilter }) {
    const handleVioletClick = (e) => {
        e.stopPropagation();
        //console.log(e.target);
        addColorFilter("violet");
    };
    const handleBlueClick = (e) => {
        e.stopPropagation();
        //console.log(e.target);
        addColorFilter("blue");
    };
    const handleRedClick = (e) => {
        e.stopPropagation();
        //console.log(e.target);
        addColorFilter("red");
    };
    const handleClearClick = (e) => {
        e.stopPropagation();
        //console.log(e.target);
        addColorFilter(false);
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.vezana}
                onClick={(e) => handleVioletClick(e)}
            >
                <div className={styles.violet}></div>
                <div>vezana djelatnost</div>
            </div>
            <div
                className={styles.slobodna}
                onClick={(e) => handleBlueClick(e)}
                name="slobodna"
            >
                <div className={styles.blue}></div>
                <div>slobodna djelatnost</div>
            </div>
            <div
                className={styles.povlastena}
                onClick={(e) => handleRedClick(e)}
                name="povlaštena"
            >
                <div className={styles.red}></div>
                <div>povlaštena djelatnost</div>
            </div>
            <div
                className={styles.sve}
                onClick={(e) => handleClearClick(e)}
                name="povlaštena"
            >
                <div className={styles.clear}></div>
                <div>Ukloni filtere</div>
            </div>
        </div>
    );
}
