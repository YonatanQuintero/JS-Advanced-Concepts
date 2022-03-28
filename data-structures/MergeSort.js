function mergeSort(arr, n) {

    if (n < 2) {
        return
    }

    const mid = parseInt(n / 2)
    const left = new Array(mid)
    const right = new Array(n - mid)

    for (let i = 0; i < mid; i++) {
        left[i] = arr[i]
    }

    for (let i = mid; i < n; i++) {
        right[i - mid] = arr[i]
    }

    mergeSort(left, mid)
    mergeSort(right, n - mid)
    merge(arr, left, right, mid, n - mid)

}

function merge(arr, left, right, nl, nr) {

    let i = 0,
        j = 0,
        k = 0
    while (i < nl && j < nr) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++]
        } else {
            arr[k++] = right[j++]
        }
    }

    while (i < nl) {
        arr[k++] = left[i++]
    }

    while (j < nr) {
        arr[k++] = right[j++]
    }
}

const arr1 = [10, 2, 6, 1, 3, 4, 5, 8, 9, 7, 0]
    //output = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
mergeSort(arr1, arr1.length)
console.log(arr1)