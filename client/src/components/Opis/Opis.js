import React, { useEffect } from "react";
import styles from "./opis.module.css";
import { Frame, AnimatePresence } from "framer";

export default function Opis({ addOpis, info }) {
    const transition = { duration: 1 };
    console.log(info);
    useEffect(() => {
        console.log(info);
    }, [info]);
    const handleClick = () => {
        addOpis(false);
    };
    return (
        <AnimatePresence>
            <Frame
                className={styles.container}
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: "-100%" }}
                exit={{ opacity: 0, x: "100%" }}
                transition={transition}
            >
                <div className={styles.iks} onClick={handleClick}>
                    X
                </div>
                <div className={styles.border}>
                    <div className={styles.kvalifikacije}>
                        Kvalifikacije: {info["potrebna kvalifikacija"]}
                    </div>
                    <div className={styles.opis}>
                        Opis djelatnosti
                        <div>{info.objasnjenje}</div>
                    </div>
                    <div>
                        Linkovi za vise informacija:
                        <a href={info.linkovi[0]}>Link 1</a>
                        <a href={info.linkovi[1]}>Link 2</a>
                    </div>
                </div>
            </Frame>
        </AnimatePresence>
    );
}
