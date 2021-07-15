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
          <h1 className="texto1">Renda total</h1>
          <DinheiroTexto className="valor">{rendaTotal}</DinheiroTexto>
        </div>

        <BarraProgresso
          CorA={CorA}
          CompA={String((dividas / rendaTotal) * 100) + '%'}
          CorB={CorB}
          CompB={String((contas / rendaTotal) * 100) + '%'}
          FanB={'block'}
          CorC={CorC}
          CompC={String((futuro / rendaTotal) * 100) + '%'}
          FanC={'block'}
          CorD={CorD}
          CompD={
            String(
              ((rendaTotal - dividas - contas - futuro) / rendaTotal) * 100
            ) + '%'
          }
          FanD={'block'}
        ></BarraProgresso>

        <ResumoFinanceiroLinha
          corPreenchimento={CorA}
          textoInfo="Pagando dívidas"
          valorAberto={dividas}
        ></ResumoFinanceiroLinha>

        <ResumoFinanceiroLinha
          corPreenchimento={CorB}
          textoInfo="Pagando contas"
          valorAberto={contas}
        ></ResumoFinanceiroLinha>

        <ResumoFinanceiroLinha
          corPreenchimento={CorC}
          textoInfo="Investindo no futuro"
          valorAberto={futuro}
        ></ResumoFinanceiroLinha>

        <ResumoFinanceiroLinha
          corPreenchimento={CorD}
          textoInfo="Sobrou, gaste como quiser!"
          valorAberto={rendaTotal - dividas - contas - futuro}
        ></ResumoFinanceiroLinha>
      </div>
    </>
  )
}

export default ResumoFinanceiro
