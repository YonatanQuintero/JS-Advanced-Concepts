const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/posts'
]

Promise.all(urls.map(url => {

    return fetch(url).then(resp => resp.json())

})).then(results => {

    console.log(results[0])
    console.log(results[1])
    console.log(results[2])

})
.catch(() => console.log('Error'))
.finally(() => console.log('Extra'))
