class Heroi {
    constructor(nome, idade, tipo) 
    
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = " ";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "atacou";
                break;
        }

        console.log(`${this.nome}, o ${this.tipo}, atacou usando ${ataque}`);
    }
}

let heroi1 = new Heroi("Ares", 41, "guerreiro");
let heroi2 = new Heroi("Mestre dos Magos", 5000, "mago");
let heroi3 = new Heroi("Takashiro Yoko", 59, "monge");
let heroi4 = new Heroi("Hill Dragon", 29, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();




      
