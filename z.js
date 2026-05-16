const arr = [5,3,7,8,2,9]
const res = arr.filter((item) => item  > 7 )
console.log(res);

Array.prototype.myFilter = function (cb) {
    const res = []
    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this)){
            res.push(this[i])
        }
    }
    return res
}

const a = arr.myFilter((i) => i < 5 )
console.log(`This is polyfil's lbs:`, a)