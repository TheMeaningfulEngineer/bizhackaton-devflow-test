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
    //const [opis, setOpis] = useState(false);
    const [colorFilter, setColorFilter] = useState("");
    const [info, setInfo] = useState();

    // useEffect(() => {
    //     axios
    //         .get("/activities")
    //         .then(({ data }) => {
    //             setResult(data.djelatnosti);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);

    useEffect(() => {
        console.log("tu sam");
        let query = {
            keyword: input,
        };
        if (query.keyword) {
            axios
                .get("/activities", query)
                .then(({ data }) => {
                    const dataArray = data.djelatnosti;
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
        } else {
            axios
                .get("/activities")
                .then(({ data }) => {
                    setResult(data.djelatnosti);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [input]);

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
        let list;
        if (colorFilter) {
            list = filteredList;
        } else {
            list = result;
        }
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
