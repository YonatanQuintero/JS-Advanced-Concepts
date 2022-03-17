//Create a function that reverses a string:
//"Hi my name is Yonax", should be:
//"xanoY si eman im iH"

function reverse(str) 
{
    let result = ""
    let i = 0
    while (str[i] != undefined) 
    {
        i++
        result += str[str.length - i]
    }

    return result
}

console.log(reverse("Hi my name is Yonax"))

//Coach solution
function reverse2(str) 
{
    //check input
    if (!str || str.length < 2 || typeof str !== 'string')
    {
        return 'hmm that is not good'
    }
    const backwards = []
    const totalItems = str.length - 1
    for (let i = totalItems; i >= 0; i++) 
    {
        backwards.push(str[i])
    }

    return backwards.join('')
}