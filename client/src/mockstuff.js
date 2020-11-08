//
// axios
//     .get("/activities", query)
//     .then(({ data }) => {
//         console.log(data);
//         const dataArray = Object.entries(data).map((e) => e[1]);
//         const list = [];
//         for (let i = 0; i < dataArray.length; i++) {
//             if (dataArray[i].ime.toLowerCase().includes(input)) {
//                 list.push(dataArray[i]);
//             }
//         }
//         setResult(list);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// //    console.log(data);
// // return () => {
// //     cleanup = true;
// // };

// axios
//     .post("/activities", query)
//     .then(({ data }) => {
//         console.log(data);
//         const dataArray = Object.entries(data).map((e) => e[1]);
//         const list = [];
//         for (let i = 0; i < dataArray.length; i++) {
//             if (
//                 dataArray[i].ime.toLowerCase().includes(debouncedInput)
//             ) {
//                 list.push(dataArray[i]);
//             }
//         }
//         setResult(list);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//a u onaj drugi useefekt dodati da prati debounced input
// useEffect(() => {
//     const timerId = setTimeout(() => {
//         setDebouncedInput(input);
//     }, 1000);

//     return () => {
//         clearTimeout(timerId);
//     };
// }, [input]);
