import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
import data from "../../db.json";
import ListaDjelatnosti from "../ListaDjelatnosti/ListaDjelatnosti";
import axios from "axios";

export default function Search() {
    const [input, setInput] = useState();
    //const [result, setResult] = useState();
    //console.log("result: ", result);

    useEffect(() => {
        console.log(input);
        console.log(data);

        axios
            .get("/activities", { query: { keyword: input } })
            .then((results) => {
                console.log(results);
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(data);
    }, [input]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <React.Fragment>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Upišite pojam za pretraživanje"
                    className={styles.term}
                    onChange={handleChange}
                />
            </div>
            {data ? <ListaDjelatnosti result={data} /> : null}
        </React.Fragment>
    );
}
