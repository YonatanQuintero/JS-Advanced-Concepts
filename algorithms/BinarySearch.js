const arr = [6, 7, 8, 9, 10, 11, 14, 15, 17, 19, 22, 23, 25, 28, 30]
const target = 24

function binarySearch(arr, target, start, end){

    if(start >= end){
        return -1
    }

    const mid = parseInt((start + end) / 2)

    if(arr[mid] === target){
        return mid
    }else if(target < arr[mid]){
        return binarySearch(arr, target, start, end -1)
    }else{
        return binarySearch(arr, target, start + 1, end)
    }

}

const index = binarySearch(arr, target, 0, arr.length)
if(index > -1){
    console.log(`Target ${arr[index]} found at position ${index}`)
}else{
    console.log(`Target ${target} don't found!`)
}