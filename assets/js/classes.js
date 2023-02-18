// Knight ou Sorcerer - Guerreiro ou Mago.
// LittleMonster ou BigMonster - Mostros.

class Character {
 
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character{
    constructor(name){
        super(name);
        this.life = 40;
        this.attack = 4 ;
        this.defense = 4 ;
        this.maxLife = this.life;
    }

}

class BigMonster extends Character{
    constructor(name){
        super(name);
        this.life = 120;
        this.attack =  16 ;
        this.defense =  6 ;
        this.maxLife = this.life;
    }

}

class Stage{
    constructor(fighter1,fighter2,fighter1El,fighter2El){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start(){
        this.update();
       
        this.fighter1El.querySelector('.attackButton').addEventListener('click',() => this.doAttack(this.fighter1,this.fighter2));
        this.fighter2El.querySelector('.attackButton').addEventListener('click',() => this.doAttack(this.fighter2,this.fighter1));
    }

    update(){
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = ` Nome : ${this.fighter1.name} - HP ${this.fighter1.life.toFixed(1)} - <br> Raça: ${this.fighter1.constructor.name}` ;
        let f1pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.lifebar .bar').style.width = `${f1pct}%`;


        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = ` Nome : ${this.fighter2.name} - HP ${this.fighter2.life.toFixed(1)} - <br> Raça: ${this.fighter2.constructor.name}` ;
        let f2pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.lifebar .bar').style.width = `${f2pct}%`;

    }

    doAttack(attracking,attaacked){
        if(attracking.life <= 0 || attaacked.life <=0 ){
            console.log('Atacando Cachorro Morto');
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let actualAttack = attracking.attack * attackFactor;

        let defenseFactor = (Math.random() * 2).toFixed(2);
        let actualDefense = attracking.defense * defenseFactor;

        if(actualAttack > actualDefense){
            attaacked.life -= actualAttack;
            console.log(`${attracking.name} causou ${actualAttack.toFixed(2)} de dano em ${attaacked.name}` );
        } else {
            console.log(`${attaacked.name} conseguiu denfender `);
        }
            this.update();
    }
}