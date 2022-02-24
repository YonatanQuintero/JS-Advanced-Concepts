const urls = [

    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
    
]

const getData = async function(){

    try{

        const [a, b, c, d] = await Promise.all(urls.map( url => 

            fetch(url).then( resp => resp.json())
    
        ))
        
        console.log('users', a)
        console.log('posts', b)
        console.log('albums', c)
    
    }catch(err){

        console.log('oops',err)

    }

}