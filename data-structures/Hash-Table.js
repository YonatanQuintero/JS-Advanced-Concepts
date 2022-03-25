class HashTable {

    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }
            }
        }
        return undefined
    }

    keys() {
        const keys = []
        this.data.forEach(bucket => {
            bucket.forEach(item => {
                keys.push(item[0])
            })
        })
        return keys
    }
}

const myHashTable = new HashTable(200)
myHashTable.set('grapes', 100)
myHashTable.set('pineapple', 200)
myHashTable.set('carrots', 300)
myHashTable.set('apple', 400)
myHashTable.set('apple', 500)

//myHashTable.get('pineapple')
//console.log(myHashTable.get('apple'))
console.log(myHashTable.keys())