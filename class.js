// old 
function Animal (family, specie, hue) {
  this.family = family
  this.specie = specie
  this.hue= hue
}
Animal.prototype.yell = function () {
  console.log(this.hue)
  return this.hue
}

const doge = new Animal('Canidae', 'Canis lupus', 'Woug')
console.log(doge.yell()) // Woug

// new
class Animals {
  constructor (family, specie, hue) {
    this.family = family
    this.specie = specie
    this.hue= hue
  }
  yell () {
    console.log(this.hue)
    return this.hue
  }
}

const animals = new Animals('lee', 'human being', 'a')
console.log(animals.yell()) //a


