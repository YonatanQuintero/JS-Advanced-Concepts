//https://www.sangakoo.com/en/unit/combinations-without-repetition

function combinationsWithoutRepetition(input, r) {

    const output = []
    helper(input, r, 0, 1, [], output, 0)
    return output

}

function helper(input, r, i, n, aux, output, k) {

    for (let j = i; j < input.length; j++) {
        aux[n - 1] = input[j]
        if (n < r) {
            k = helper(input, r, j + 1, n + 1, aux, output, k)
        } else {
            output[k++] = [].concat(aux)
        }
    }
    return k
}

const input = ['a', 'b', 'c', 'd']
const input2 = ['a', 'b', 'c', 'd','e']
console.log(combinationsWithoutRepetition(input, 3))