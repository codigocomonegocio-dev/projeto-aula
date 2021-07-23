import React from 'react'
import DinheiroTexto from 'components/DinheiroTexto'

const ResumoFinanceiroLinha = ({
  corPreenchimento,
  valorAberto,
  textoInfo,
}) => {
  return (
    <>
      <div className="resumo-linha">
        <svg
          className="elipse"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill={corPreenchimento} />
        </svg>
        <p className="texto">{textoInfo}</p>
        <DinheiroTexto className="valor">{valorAberto}</DinheiroTexto>
      </div>
    </>
  )
}
export default ResumoFinanceiroLinha
