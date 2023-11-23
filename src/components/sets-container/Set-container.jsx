import Operations from "../operations/Operations";
import Set from "../set/Set";

import './set-container.css'

export default function SetContainer({set1ref, set2ref, operations}){

    return(
        <div>
            <div className="set-container centered-content">
                <Set simbol="A" index="1" reference={set1ref}/>
                <Set simbol="B" index="2" reference={set2ref}/>
            </div>
            <Operations operations={operations}/>
        </div>
    )
}