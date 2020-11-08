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
    const [opis, setDescript] = useState(false);
    const [colorFilter, setColorFilter] = useState("");

    useEffect(() => {
        let query = {
            keyword: input,
        };

        axios
            .get("/activities", query)
            .then(({ data }) => {
                //console.log(data);
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
    }, [input]);
    useEffect(() => {
        axios
            .get("/activities")
            .then(({ data }) => {
                const dataArray = Object.entries(data).map((e) => e[1]);
                const list = [];
                for (let i = 0; i < dataArray.length; i++) {
                    list.push(dataArray[i]);
                }
                setResult(list);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const addOpis = (klik) => {
        setDescript(klik);
    };

    const addColorFilter = (filter) => {
        setColorFilter(filter);
        let filteredList = result;
        if (colorFilter === "violet") {
            filteredList = result.filter((item) => {
                return item.vezanost === "vezana";
            });
        } else if (colorFilter === "red") {
            filteredList = result.filter((item) => {
                return item.vezanost === "povlaštena";
            });
        } else if (colorFilter === "blue") {
            filteredList = result.filter((item) => {
                return item.vezanost === "slobodna";
            });
        }
        return filteredList;
    };
    return (
        <div className={styles.search_container}>
            <Legenda addColorFilter={(filter) => addColorFilter(filter)} />
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
                    colorFilter={colorFilter}
                />
            </div>
            {opis ? <Opis /> : null}
        </div>
    );
}
