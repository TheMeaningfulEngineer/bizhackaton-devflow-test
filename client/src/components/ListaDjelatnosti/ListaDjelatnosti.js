import React from "react";
import styles from "./listadjelatnosti.module.css";
//import data from "../../data.json";

export default function ListaDjelatnosti({ result }) {
    console.log("result u listadjelatnosti: ", result);
    return (
        <div className={styles.container}>
            {result.map((item) => {
                return (
                    <div key={item.sifra} className={styles.lista}>
                        <span className={styles.sifra}>{item.sifra}</span>
                        <span className={styles.ime}>{item.ime}</span>
                        <span className={styles.vezanost}>{item.vezanost}</span>
                    </div>
                );
            })}
        </div>
    );
}
