import React, { useState } from 'react'
import BarraProgresso from 'components/BarraProgresso'
import DinheiroTexto from 'components/DinheiroTexto'
import ResumoFinanceiroLinha from 'components/ResumoFinanceiroLinha'

const ResumoFinanceiro = ({
  rendaTotal,
  dividas,
  contas,
  futuro,
  CorA,
  CorB,
  CorC,
  CorD,
}) => {
  return (
    <>
      <div className="resumo">
        <div className="total">
          <p className="texto">Renda total</p>
          <DinheiroTexto className="valor">{rendaTotal}</DinheiroTexto>
        </div>

        <div className="barra-financeiro">
          <BarraProgresso
            valores={[
              {
                cor: '#000000',
                porcentagem: 100,
              },
              {
                cor: '#17D28F',
                porcentagem: ((futuro + contas + dividas) / rendaTotal) * 100,
              },
              {
                cor: '#1968DF',
                porcentagem: ((contas + dividas) / rendaTotal) * 100,
              },
              {
                cor: '#FC3467',
                porcentagem: (dividas / rendaTotal) * 100,
              },
            ]}
          ></BarraProgresso>
        </div>

        <div className="conjunto-linhas">
          <div className="dividas">
            <ResumoFinanceiroLinha
              corPreenchimento={CorA}
              textoInfo="Pagando dívidas"
              valorAberto={dividas}
            ></ResumoFinanceiroLinha>
          </div>
          <div className="contas">
            <ResumoFinanceiroLinha
              corPreenchimento={CorB}
              textoInfo="Pagando contas"
              valorAberto={contas}
            ></ResumoFinanceiroLinha>
          </div>
          <div className="futuro">
            <ResumoFinanceiroLinha
              corPreenchimento={CorC}
              textoInfo="Investindo no futuro"
              valorAberto={futuro}
            ></ResumoFinanceiroLinha>
          </div>
          <div className="sobra">
            <ResumoFinanceiroLinha
              corPreenchimento={CorD}
              textoInfo="Sobrou, gaste como quiser!"
              valorAberto={rendaTotal - dividas - contas - futuro}
            ></ResumoFinanceiroLinha>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResumoFinanceiro
