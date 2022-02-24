//Example #1
const animals = {

    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40

}

const {tiger, ...rest} = animals

//Example #2
const array = [1,2,3,4,5]
function sum(a,b,c,d,e){
    return a + b + c + d + e
}
sum(...array)

//Example #3
function objectSpread(p1, p2, p3){
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, lion, ...rest} = animals
objectSpread(tiger, lion, rest)