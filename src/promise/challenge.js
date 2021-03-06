const FecthData = require("../utils/fetchData") ;

const API = 'https://rickandmortyapi.com/api/character/';

FecthData(API)
    .then(data => {
        console.log(data.info.count);
        return FecthData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return FecthData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err));



