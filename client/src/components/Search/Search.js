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
    const [filteredList, setFilteredList] = useState([]);
    const [colorFilter, setColorFilter] = useState("");
    const [info, setInfo] = useState();

    useEffect(() => {
        axios
            .get("/activities")
            .then(({ data }) => {
                setResult(data.djelatnosti);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [input]);

    useEffect(() => {
        console.log("input", input);
        console.log("result", result);
        console.log("colorfilter", colorFilter);
        console.log("filteredList", filteredList);

        let dataArray;
        if (colorFilter) {
            dataArray = filteredList;
        } else {
            dataArray = result;
        }
        const list = [];
        if (input) {
            for (let i = 0; i < dataArray.length; i++) {
                if (dataArray[i].ime.toLowerCase().includes(input)) {
                    list.push(dataArray[i]);
                }
            }
            setResult(list);
        }
    }, [input, result, colorFilter, filteredList]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const addOpis = (sifra) => {
        result.map((item) => {
            if (item.sifra === sifra) {
                const info = item;
                setInfo(info);
            }
            return item;
        });
    };

    const addColorFilter = (filter) => {
        let filteredList = [];
        let list = result;
        if (filter === "violet") {
            list.filter((item) => {
                if (item.vezanost === "vezana") {
                    return filteredList.push(item);
                }
                return filteredList;
            });
        } else if (filter === "red") {
            list.filter((item) => {
                if (item.vezanost === "povlaštena") {
                    return filteredList.push(item);
                }
                return filteredList;
            });
        } else if (filter === "blue") {
            list.filter((item) => {
                if (item.vezanost === "slobodna") {
                    return filteredList.push(item);
                }
                return filteredList;
            });
        }
        setColorFilter(filter);
        setFilteredList(filteredList);
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
                    onChange={(e) => handleChange(e)}
                />
                <ListaDjelatnosti
                    list={result}
                    addOpis={(sifra) => addOpis(sifra)}
                    filteredList={filteredList}
                    colorFilter={colorFilter}
                />
            </div>
            {info ? <Opis info={info} setInfo={setInfo} /> : null}
        </div>
    );
}
