// exercício 1

class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario{
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

const user = document.getElementById('user');
user.textContent = User1.isAdmin();

const admin = document.getElementById('admin');
admin.textContent = Adm1.isAdmin();

// exercício 2

const usuarios = [  
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },  
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },  
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const ageList = usuarios.map(el => el.idade);
console.log(ageList); // [23,15,30]
const age = document.getElementById('age');
age.textContent = ageList;

const userRocketseatList = usuarios.filter(el => el.empresa === 'Rocketseat' && el.idade > 18);
console.log(userRocketseatList); // [{"nome":"Diego","idade":23,"empresa":"Rocketseat"}]
const userRocketseat = document.getElementById('userRocketseat');
userRocketseat.textContent = JSON.stringify(userRocketseatList);

const userGoogleList = usuarios.find(el => el.empresa === 'Google');
console.log(userGoogleList); // undefined
const userGoogle =document.getElementById('userGoogle');
userGoogle.textContent = userGoogleList ? JSON.stringify(userGoogleList) : 'undefined';

const resultFourList = usuarios.map(el => {
    return {
        nome: el.nome,
        idade: el.idade * 2,
        empresa: el.empresa
    }
}).filter(el => el.idade <= 50);
console.log(resultFourList); //  [{"nome":"Diego","idade":46,"empresa":"Rocketseat"},{"nome":"Gabriel","idade":30,"empresa":"Rocketseat"}] 
const resultFour = document.getElementById('resultFour');
resultFour.textContent = JSON.stringify(resultFourList);