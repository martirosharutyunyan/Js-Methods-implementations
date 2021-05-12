Array.prototype.myPush = function (...args) {
    let arr = this
    for (let i = 0; i < args.length; i++) {
        arr[arr.length] = args[i] 
    }
    return arr
}

Array.prototype.myFind = function (action) {
    for (let i = 0; i < this.length; i++) {
        if (action(this[i], i, this)) {
            return this[i]
        }
    }
    return null
}

Array.prototype.myFilter = function (action) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (action(this[i], i, array)) {
            arr = [...arr, this[i]]
        }
    }
    return arr
}

Array.prototype.removeDublicats = function () {
    let arr = []
    for (let key of this) {
        arr.myFind(elem => elem === key) ? null : arr = [...arr, key]
    }
    return arr
}

Array.prototype.quickSort = function () {
    const array = this
    if (array.length < 2) {
        return array
    }
    const pivot = array[0]
    const less = array.myFilter(elem => elem < pivot)
    const greater = array.myFilter(elem => elem > pivot)
    return [...less.quickSort(), pivot, ...greater.quickSort()]
}

Array.prototype.myMap = function (action) {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr = [...arr, action(this[i], i, this)]
    }
    return arr
}
