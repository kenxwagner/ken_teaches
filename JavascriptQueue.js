class Queue {
    data = []
    maxSize

    constructor(initialData, maxSize = -1) {
        this.data = Array.isArray(initialData) ? initialData : (typeof initialData == "undefined" ? [] : [initialData])
        this.maxSize = maxSize
    }
    
    isFull() {
        return this.maxSize != -1 ? (this.data.length == this.maxSize) : false
    }
    
    isEmpty() {
        return this.data.length == 0
    }
