class heroClass{
   constructor(heroName, heroAge, heroType){
      this.heroName = heroName;
      this.heroAge = heroAge;
      this.heroType = heroType;
   }

   atacar() {
      let heroAttack;

      if(this.heroType === "mago"){
         heroAttack = "magia";
      } else if(this.heroType === "guerreiro") {
         heroAttack = "espada";
      } else if (this.heroType === "monge") {
         heroAttack = "artes marciais";
      } else if (this.heroType === "ninja") {
         heroAttack = "shuriken";
      } else {
         heroAttack = "as mãos";
      }

      console.log(`O ${this.heroType} atacou usando ${heroAttack}.`);
   }
}


let heroMago = new heroClass("", "", "mago");
let heroGuerreiro = new heroClass("", "", "guerreiro");
let heroMonge = new heroClass("", "", "monge");
let heroNinja = new heroClass("", "", "ninja");
let heroOutros = new heroClass("", "", "anão");


heroMago.atacar();
heroGuerreiro.atacar();
heroMonge.atacar();
heroNinja.atacar();
heroOutros.atacar();