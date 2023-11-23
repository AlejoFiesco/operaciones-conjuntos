import './set.css'

export default function Set({reference, simbol, index, editable=true, large=false}){
    return(
        <div className="set">
            <span>{simbol}: </span>
            <span>{"{"}</span>
            <input className={large ? "extra-width" : ""} type="text" name="setContent" id={"setContent" + index} placeholder={editable ? "1, 2, 3, 4, 5" : ""} disabled={!editable} ref={reference}/>
            <span>{"}"}</span>
        </div>
    )
}