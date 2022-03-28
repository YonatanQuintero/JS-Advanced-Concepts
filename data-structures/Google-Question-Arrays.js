//Google question
//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
//It should be return 2

//Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]
//It should be return 1

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]
const arr3 = [2, 3, 4, 5]
const arr4 = [2, 3, 4, 2]

function solution3(arr) {

    const aux = {}
    for (let i = 0; i < arr.length; i++) {
        if(aux[arr[i]]) {
            return arr[i]
        }else {
            aux[arr[i]] = i
        }
    }
    return undefined
}//O(n)

function solution1(arr) {

    const aux = []
    for (let i = 0; i < arr.length; i++) {
        aux.push(arr[i])
        for (let j = 0; j < aux.length; j++) {
            if (aux[j] === arr[i + 1]) {
                return aux[j]
            }
        }
    }
    return undefined
}//O(n^2)

console.log(solution3([2, 5, 1, 2, 3, 5, 1, 2, 4]))//2
console.log(solution3([2, 1, 1, 2, 3, 5, 1, 2, 4]))//1
console.log(solution3([0, 3, 4, 0]))//0
console.log(solution3([2, 3, 4, 5]))//undefined