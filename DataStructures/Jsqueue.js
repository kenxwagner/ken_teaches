isEmpty() {
        return this.data.length == 0
    }
    
    enqueue(item) {
        if(this.isFull()) {
            return false
        }
        this.data.push(item)
    }
    
    *generator() {
        while(!this.isEmpty()) {
            yield this.data.shift()
        }
    }
    
    dequeue() {
       const { value, done } = 
