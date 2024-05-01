import axois from "axios" ;

const instance = axois.create({
    baseURL:"https://jsonplaceholder.typicode.com",
});

export default instance;