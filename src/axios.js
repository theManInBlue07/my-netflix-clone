import axios from 'axios';


//initialising an instance// request

const instance =axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;