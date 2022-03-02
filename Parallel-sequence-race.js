const promisify = (item, delay) => new Promise((resolve) => setTimeout(() => resolve(item),delay))

const a = () => promisify('a', 100)
const b = () => promisify('b', 5000)
const c = () => promisify('c', 3000)

//output: parallel is done: a b c
async function parallel(){
    const promises = [a(), b(), c()]
    const [output1, output2, output3] =  await Promise.all(promises)
    return `parallel is done: ${output1} ${output2} ${output3}`
}

//output: race is done: a
async function race(){
    const promises = [a(), b(), c()]
    const output1 = await Promise.race(promises)
    return `race is done: ${output1}`
}

//output: sequence is done: a b c
async function sequence(){
    const output1 = await a()
    const output2 = await b()
    const output3 = await c()
    return `sequence is done: ${output1} ${output2} ${output3}`
}

parallel().then(console.log)
sequence().then(console.log)
race().then(console.log)