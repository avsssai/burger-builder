import Axios from 'axios';

const instance = Axios.create({
    baseURL : "https://burgerbuilder-9e43a.firebaseio.com/"
});

export default instance;