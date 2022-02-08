class Character{
    #age = 54
    constructor(name, weapon){
        this.name = name
        this.weapon = weapon
    }

    attack(){
        console.log(`Attack with ${this.#age}`)
    }
}

const fiona = new Character('Fiona','Stones')
fiona.attack()