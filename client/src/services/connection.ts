import axios from 'axios';


axios.defaults.baseURL = process.env.API_URL

const restConnection = {
    test: () => {
        return axios.get('')
    },

    item: () => {
        return axios.get('item')
    },

    login: async (email: any,senha: any) => {
        return axios.post("login", { email: email, senha: senha });
    }
}
export default restConnection