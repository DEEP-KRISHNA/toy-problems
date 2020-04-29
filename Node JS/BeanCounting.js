function countB(a) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 'B') {
            count += 1
        }
    }
    return count
}

function countchar(a, b) {
    let count = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            count += 1
        }
    }
    return count
}

console.log(countB("BeanBeanB"))
console.log(countchar("BeanBeanB", 'e'))