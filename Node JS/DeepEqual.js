function DeepEqual(a, b) {
    if (typeof a === typeof b) {
        if (typeof a === 'object') {
            const keys1 = Object.keys(a)
            const keys2 = Object.keys(b)
            if (keys1.length === keys2.length) {
                for (let i = 0; i < keys1.length; i++) {
                    if ((DeepEqual(a[keys1[i]], b[keys2[i]]))) {
                        continue
                    }
                    else {
                        return false
                    }
                }
                return true
            }
            else {
                return false
            }
        }
        else {
            return a === b
        }
    }
    else {
        return false
    }
}

const a1 = { 'a': 1, };
const a2 = { 'a': 1, 'b': 2 };

if (DeepEqual(a1, a2)) {
    console.log("Equal")
}
else {
    console.log("Not Equal")
}