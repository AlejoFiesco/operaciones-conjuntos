import './operations.css'

export default function Operations({operations}){

    
    return(
        <div>
            <section className="operations centered-content">
                <button onClick={operations.union}>Unión <br/>(∪)</button>
                <button onClick={operations.intersect}>Intersección <br/>(∩)</button>
                <button onClick={operations.difference}>Diferencia <br/>(\)</button>
                <button onClick={operations.symDiff}>Diferencia simétrica <br/>(∆)</button>
                <button onClick={operations.complement}>Complemento <br/>(M')</button>
            </section>
            <span className='small'>Para el complemento se toma como B ∈ A, por lo que A es el conjunto global en el que está contenido B</span>
        </div>
    )
}