let result = []

function removeRepeated(arr){
    return [...new Set(arr)]
}
function union(set1, set2) {
    result = [...set1, ...set2]
    result = removeRepeated(result)
    return result
}

function intersect(set1, set2) {
    result = [...set1].filter(x => set2.includes(x))
    result = removeRepeated(result)
    return result
}

function difference(set1, set2) {
    result = [...set1, ...set2].filter(x => !set2.includes(x))
    result = removeRepeated(result)
    return result
}

function symDiff(set1, set2) {
    result = [...set1, ...set2].filter(x => !(set2.includes(x) && set1.includes(x)))
    result = removeRepeated(result)
    return result
}

function complement(set1, set2) {

}

const modelOperations = {
    union, intersect, difference, symDiff, complement
} 

export default modelOperations;