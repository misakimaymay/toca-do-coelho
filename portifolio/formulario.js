class Contato {

    // Método Construtor
    constructor(){
        this.name = null;
        this.email = null;
        this.tel = null;
        this.message = null;
        this.dt_cad = null;
        this.age = null;
        this.tel_tip = null;
    }

    //Método específicio da classe Contato
    Enviar(){
        this.name = document.getElementById('name').value;
        this.email = document.getElementById('email').value;
        this.tel = document.getElementById('tel').value;
        this.message = document.getElementById('message').value;
        this.dt_cad = document.getElementById('dt_cad').value;
        this.age = document.getElementById('age').value;
        this.tel_tip = document.getElementById('tel_tip').value;
        let name = '';
        let email = '';
        let tel = '';
        let message = '';
        let dt_cad = '';
        let age = '';
        let tel_tip = '';
        let user = 'Bernardo';
        const alerted = 'Você está na página de contato'
        let year = '2025';

        if (user === year) {
            alert(this.name + 'Dado inválido!')
        }

        alert(alerted + ' de ' + this.name + ' em ' + year)
    }
}

contato = new Contato();

// function Enviar(){

//     let user = 'Bernardo';
//     const alerted = 'Você está na página de contato'
//     let year = '2025';

//     if (user === year) {
//         alert(this.name + 'Dado inválido!')
//     }

//     alert(alerted + ' de ' + this.name + ' em ' + year)
// }
