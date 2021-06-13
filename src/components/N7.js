// Importação da Biblioteca padrão REACT
import React from 'react'
// Importação da biblioteca ProgressBar Bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar'
 
// Criação do componente ProgressBar
const N7 = (props) => {

    return(
        <>
            {
                props.totalCor === 2 ?
                    <div className="progressBar">
                        <ProgressBar>                            
                            <ProgressBar style={{backgroundColor: props.cor_A}} now={props.valor_A} key={1} />
                            <ProgressBar style={{backgroundColor: props.cor_B}} now={props.valor_B} key={2} />
                        </ProgressBar>
                    </div>
                    :
                    <div className="progressBar">
                        <ProgressBar>
                            <ProgressBar style={{backgroundColor: props.cor_A}} now={props.valor_A} key={1} />
                            <ProgressBar style={{backgroundColor: props.cor_B}} now={props.valor_B} key={2} />
                            <ProgressBar style={{backgroundColor: props.cor_C}} now={props.valor_C} key={3} />
                        </ProgressBar>
                    </div>
            }
        </>         
        
    )
}
// Exportando para renderização na Home
export default N7