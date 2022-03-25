//mergedSortedArrays([0, 3, 4, 31], [4, 6, 30])
// [0, 3, 4, 4, 6, 30, 31]

//Solution 1
const mergedSortedArrays = (a, b) => a.concat(b).sort((a, b) => a - b)

//Solution 2
function mergedSortedArrays2(a, b) 
{
    //Concat
    for (let i = 0; i < b.length; i++)
    {
        a.push(b[i])
    }
    
    //sort
    const sorted = []
    sorted.push(a[0])
    for (let i = 1; i < a.length; i++)
    {
        let value = a[i]
        for (let j = 0; j < sorted.length; j++)
        {
            if (value <= sorted[j]) 
            {
                let auxValue = sorted[j]
                sorted[j] = value
                value = auxValue
            }
        }
        
        sorted.push(value)

    }

    return sorted
}

//console.log(mergedSortedArrays3([0, 3, 4, 31], [4, 6, 30]))
console.log(mergedSortedArrays2([0, 2, 4, 6, 1, 3], [4, 5, 0, 20, 1, 30, 7]))