function combinations(input, r) {
    const output = [];
    helper(input, r, 1, [], output, 0);
    return output;
}

function helper(input, r, n, aux, output, k) {
    for (let j = 0; j < input.length; j++) {
        aux[n - 1] = input[j];
        if (n < r) {
            k = helper(input, r, n + 1, aux, output, k);
        } else {
            output[k++] = [].concat(aux);
        }
    }
    return k;
}

//Generate data for test
const generateData = () => {

    //Create combinations 
    const combos = combinations(combinations([0, 1, 2], 2), 3)

    //Delete unnecessary data
    return filterData(combos)
}

//Filter data
const filterData = (combos) => {

    const output = []
    let i = 0

    for (let j = 0; j < combos.length; j++) {
        if (checkData(combos[j])) {
            output[i++] = combos[j]
        }
    }

    return output
}

//Check data
const checkData = (data) => {

    //If values are equal then it's a cycle, because the node points itself.
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] === data[i][1]) {
            return false
        }
    }

    //If exists a pair with the same value it is a cycle, the order doesn't matter
    //Combinations without repetitions between pairs
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if ((data[i][0] === data[j][0] && data[i][1] == data[j][1]) ||
                (data[i][0] === data[j][1] && data[i][1] === data[j][0])) {
                return false
            }
        }
    }

    return true

}

//Print data
const printData = (data) => {
    for (let i = 1; i < data.length; i++) {
        console.log(i, data[i])
    }
}

//Print lock
//@type = COL|ROW.  Print by column first or by row
const printLock = (lock, type) => {

    for (let i = 0; i < lock.length; i++) {
        for (let j = 0; j < lock[i].length; j++) {
            if (type === 'COL') {
                //Iterate over cols first
                console.log(`Col = ${i}, Row = ${j}, value = ${lock[i][j]}`)
            } else if (type === 'ROW') {
                //Iterate over rows first
                console.log(`Row = ${i}, Col = ${j},  value = ${lock[j][i]}`)
            }
        }
    }
}

/*
Find winner:
First fill  all of locked array,
then compute the total of edges that points a every candidate,
the candidate winner doesn't have edges that points toward it,
if all candidates has edges, then there is a cycle, 
so we need to skip the last pair of the pairs array 
and to repeat this operation until find a winner 
or until iterate over all of the pairs.
@data = pairs of candidates
@length = total candidates
@n = size of data to work
@winner = winner candidate, by default is -1
**/
const findWinner = (data, length, n, winner) => {

    if (n === 0 || winner >= 0) {
        return winner
    }

    //Create lock
    const lock = []
    for (let i = 0; i < length; i++) {
        lock[i] = []
        for (let j = 0; j < length; j++) {
            lock[i][j] = false
        }
    }

    //Fill lock
    for (let i = 0; i < n; i++) {
        lock[data[i][0]][data[i][1]] = true
    }

    //Compute edges
    const edges = []
    for (let i = 0; i < length; i++) {
        edges[i] = 0
        for (let j = 0; j < length; j++) {
            //Iterate over rows first
            if (lock[j][i]) {
                edges[i] += 1
            }
        }
    }

    //Find winner
    //The winner doesn't have edges pointing towards it
    let k = 0
    do {

        winner = edges[k] === 0 ? k : -1
        k++

    } while (winner === -1 && k < length)

    return findWinner(data, length, n - 1, winner)
}

//init
const init = () => {

    const combos = generateData()

    //printData(combos)

    const data = combos[13]

    /*const data = [
        [0, 1],
        [1, 2],
        [2, 0]
    ]*/

    console.log('data', data)

    //const lock = createLock(data.length)

    //fillLock(lock, data)
    //printLock(lock, 'ROW')
    console.log('Winner', findWinner(data, data.length, data.length, -1))

}

const testAll = () => {

    const combos = generateData()

    combos.forEach((data, i) => {
        console.log(i, data)
        console.log('Winner', findWinner(data, data.length, data.length, -1))
        console.log('\n')
    })

}

//init()

testAll()