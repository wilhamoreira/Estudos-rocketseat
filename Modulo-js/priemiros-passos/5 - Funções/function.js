// função contrutora

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name +" está andando"
    }
}

const mayke = new Person("Mayke")
const joao = new Person("João")

console.log(mayke.walk())
console.log(joao.walk())