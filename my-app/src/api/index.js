import axios from 'axios';

axios.defaults.baseURL = 'https://655f4565879575426b44f9b4.mockapi.io/adverts/:endpoint';

export const fetchData = async () => {
    const responce = await axios.get('/adverts');
    return responce.data;
};