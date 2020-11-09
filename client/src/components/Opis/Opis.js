import React from "react";
import styles from "./opis.module.css";
import { Frame, AnimatePresence } from "framer";
import nl2br from "react-newline-to-break";

export default function Opis({ setInfo, info }) {
    const transition = { duration: 1 };
    const handleClick = () => {
        setInfo(false);
    };
    let myString = info.objasnjenje;
    return (
        <AnimatePresence>
            <Frame
                className={styles.container}
                initial={{ opacity: 0, x: "30%" }}
                animate={{ opacity: 1, x: "-30%" }}
                exit={{ opacity: 0, x: "100%" }}
                transition={transition}
                style={{
                    background: "none",
                    display: "flex",
                    flexDirection: "coulmn",
                }}
                size={500}
            >
                <div className={styles.iks} onClick={handleClick}>
                    X
                </div>
                <div className={styles.border}>
                    <div className={styles.title}>{info.ime}</div>
                    <div className={styles.kvalifikacije}>
                        <strong>Kvalifikacije:</strong>{" "}
                        {info["potrebna kvalifikacija"]}
                    </div>
                    <div className={styles.opis}>
                        <strong>Opis djelatnosti</strong>
                        <div>{nl2br(myString)}</div>
                    </div>

                    <a
                        href={info.linkovi[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Relevantni pravilnici
                    </a>
                </div>
            </Frame>
        </AnimatePresence>
    );
}
