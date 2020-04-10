import axios from 'axios';

import ClasseUsuario from './functions'; // 1.1
import {idade} from './functions.js'; // 1.2
import Usuario, { idade as IdadeUsuario} from './functions'; // 1.3

ClasseUsuario.info(); // 1.1

// alert(idade); // 1.2

Usuario.info(); // 1.3
// alert(IdadeUsuario); // 1.3


const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (error) {
            console.warn(`Erro na API ${error}`);
        }
    }
}

Api.getUserInfo('ValchanOficial');
Api.getUserInfo('ValchanFake');
