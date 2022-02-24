const urls = [

    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
    
]

const getData = async function(){

    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of  arrayOfPromises){
        const data = await request.json()
        console.log(data)
    }

}