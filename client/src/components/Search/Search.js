import React, { useState, useEffect } from "react";
import styles from "./search.module.css";
//import data from "../../db.json";
import ListaDjelatnosti from "../ListaDjelatnosti/ListaDjelatnosti";
import Legenda from "../Legenda/Legenda";
import axios from "axios";
import Opis from "../Opis/Opis";

export default function Search() {
    const [input, setInput] = useState();
    const [result, setResult] = useState([]);
    const [debouncedInput, setDebouncedInput] = useState();
    const [opis, setDescript] = useState(false);
    //console.log("result: ", result);

    //a u onaj drugi useefekt dodati da prati debounced input
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedInput(input);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [input]);

    useEffect(() => {
        //console.log(input);
        //console.log(data);
        //let cleanup = false;
        let query = {
            keyword: debouncedInput,
        };
        axios
            .post("/activities", query)
            .then(({ data }) => {
                console.log(data);
                const dataArray = Object.entries(data).map((e) => e[1]);
                const list = [];
                for (let i = 0; i < dataArray.length; i++) {
                    if (
                        dataArray[i].ime.toLowerCase().includes(debouncedInput)
                    ) {
                        list.push(dataArray[i]);
                    }
                }
                setResult(list);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [debouncedInput]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const addOpis = (klik) => {
        setDescript(klik);
        console.log("lalal");
    };

    return (
        <div className={styles.search_container}>
            <Legenda />
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Upišite pojam za pretraživanje"
                    className={styles.term}
                    onChange={handleChange}
                />
                <ListaDjelatnosti
                    result={result}
                    addOpis={(klik) => addOpis(klik)}
                />
            </div>
            {opis ? <Opis /> : null}
        </div>
    );
}
