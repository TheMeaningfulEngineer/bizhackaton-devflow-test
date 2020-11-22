import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
//import data from "../../db.json";
import ListaDjelatnosti from "../ListaDjelatnosti/ListaDjelatnosti";
import axios from "axios";

export default function Search() {
    const [input, setInput] = useState();
    const [result, setResult] = useState([]);
    console.log("result: ", result);

    useEffect(() => {
        console.log(input);
        //console.log(data);
        //let cleanup = false;
        axios
            .get("/activities", { query: { keyword: input } })
            .then(({ data }) => {
                console.log(data);
                const dataArray = Object.entries(data).map((e) => e[1]);
                const list = [];
                for (let i = 0; i < dataArray.length; i++) {
                    if (dataArray[i].ime.toLowerCase().includes(input)) {
                        list.push(dataArray[i]);
                    }
                }
                setResult(list);
            })
            .catch((err) => {
                console.log(err);
            });
        //    console.log(data);
        // return () => {
        //     cleanup = true;
        // };
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
            {result.length > 0 ? <ListaDjelatnosti result={result} /> : null}
        </React.Fragment>
    );
}
