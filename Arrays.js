//Map
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const by10 = arr.map(el => el * 10)

//console.log('by10', by10)
//console.log('arr', arr)

//Filter
const filterArray = arr.filter(el => el > 5)
    //console.log('filterArray', filterArray)

//Reduce
const reduceArray = arr.reduce((acc, el) => acc + el)
console.log('reduceArray', reduceArray)