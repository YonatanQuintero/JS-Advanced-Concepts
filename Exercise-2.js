const array = [1,2,3,4]
for(var i=0; i < array.length; i++){
    setTimeout(function(){
        console.log("I am at index "+ i)
    },3000)
}
//First solution
function printIndex(index){
    return function (){console.log("First solution - I am at index "+ index)}
}
function iterateArray(arr, fn){
    for (var i = 0; i < arr.length; i++){
        setTimeout(fn(i),3000)
    }
}
iterateArray(array,printIndex)

//Second solution
for(let i=0; i < array.length; i++){
    setTimeout(function(){
        console.log("Second solution - I am at index "+ i)
    },3000)
}

//Third solution
for(var i=0; i < array.length; i++){
    (function(clousoredI){
        setTimeout(function(){
            console.log("Third solution - I am at index "+ clousoredI)
        },3000)
    })(i)
}