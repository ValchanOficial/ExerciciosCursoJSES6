import * as funcoes from './funcoes.js';
import soma, { sub as subFunction } from './funcoes.js';
import somaFunction from './soma';

console.log(funcoes.mult(2, 2));
console.log(soma(1, 2));
console.log(somaFunction(1, 2));
console.log(subFunction(10, 5));

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Valchan';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = () => {
    MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario();
console.log(Matematica.soma(1, 2));