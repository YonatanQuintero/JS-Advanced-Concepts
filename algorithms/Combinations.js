function combinations(input, r) {

    const output = []
    helper(input, r, 1, [], output, 0)
    return output

}

function helper(input, r, n, aux, output, k) {

    for (let j = 0; j < input.length; j++) {
        aux[n - 1] = input[j]
        if (n < r) {
            k = helper(input, r, n + 1, aux, output, k)
        } else {
            output[k++] = [].concat(aux)
        }
    }
    return k
}


const arr = [0, 1, 2]
const r = 2

const output = combinations(arr, r)
console.log(output)