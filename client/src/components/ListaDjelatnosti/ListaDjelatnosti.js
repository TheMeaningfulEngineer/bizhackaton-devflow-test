import React from "react";
import styles from "./listadjelatnosti.module.css";

export default function ListaDjelatnosti({
    list,
    addOpis,
    filteredList,
    colorFilter,
}) {
    const handleClick = (e, sifra) => {
        addOpis(sifra);
    };
    let result;
    if (colorFilter) {
        result = filteredList;
    } else {
        result = list;
    }
    return (
        <div className={`${styles.container} ${styles.scrollbar}`}>
            {result.map((item) => {
                let style = {};
                let style2 = {};
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
                        onClick={(e) => handleClick(e, item.sifra)}
                    >
                        <div className={styles.sifra} style={style}>
                            {item.sifra}
                        </div>
                        <div className={styles.ime}>{item.ime}</div>
                        {/* <div className={styles.vezanost} style={style}>
                            {item.vezanost}
                        </div> */}
                    </div>
                );
            })}
        </div>
    );
}
