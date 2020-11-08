import React from "react";
import styles from "./listadjelatnosti.module.css";
//import data from "../../data.json";

export default function ListaDjelatnosti({ result, addOpis }) {
    console.log("result u listadjelatnosti: ", result);
    const handleClick = (e) => {
        addOpis("klik");
    };
    return (
        <div className={styles.container}>
            {result.map((item) => {
                let style = {};
                let style2 = {};
                console.log(item.ime);
                if (item.vezanost === "slobodna") {
                    style2 = { borderColor: "#4A8FE7" };
                    style = {
                        backgroundColor: "#4A8FE7",
                    };
                } else if (item.vezanost === "vezana") {
                    style = { backgroundColor: "#541388" };
                    style2 = { borderColor: "#541388" };
                } else {
                    style = { backgroundColor: "#F45B69" };
                    style2 = { borderColor: "#F45B69" };
                }
                return (
                    <div
                        key={item.sifra}
                        className={styles.lista}
                        style={style2}
                        onClick={(e) => handleClick(e)}
                    >
                        <div className={styles.sifra}>{item.sifra}</div>
                        <div className={styles.ime}>{item.ime}</div>
                        <div className={styles.vezanost} style={style}>
                            {item.vezanost}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
