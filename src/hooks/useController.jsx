import { useRef } from "react";
import modelOperations from "../model/operations";

export default function useController(){
    const set1ref = useRef()
    const set2ref = useRef()
    const resultSetRef = useRef()

    let set1 = []
    let set2 = []


    function prepareSets(){
        let set1temp = set1ref.current.value
        let set2temp = set2ref.current.value

        set1 = formatSet(set1temp)
        set2 = formatSet(set2temp)
    }

    function formatSet(set){
        let arr = set.split(',')
        arr = arr.map((item)=>item.replace(/\s+/g, ''))
        arr = arr.filter((item) => item !== '')
        return arr
    }

    function showResult(result){
        resultSetRef.current.value = result.join(', ')
    }


    function union(){
        prepareSets()
        let result  = modelOperations.union(set1,set2)
        showResult(result)
    }

    function intersect(){
        prepareSets()
        let result  = modelOperations.intersect(set1,set2)
        showResult(result)
    }

    function difference(){
        prepareSets()
        let result  = modelOperations.difference(set1,set2)
        showResult(result)
    }

    function symDiff(){
        prepareSets()
        let result  = modelOperations.symDiff(set1,set2)
        showResult(result)
    }
    
    function complement(){
        prepareSets()
        let result  = modelOperations.complement(set1,set2)
        showResult(result)
    }

    const operations = {union, intersect, difference, symDiff, complement}

    return {set1ref, set2ref, resultSetRef, operations}
}