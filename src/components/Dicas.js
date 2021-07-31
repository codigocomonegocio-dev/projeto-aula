import React from 'react'

const Dicas = ({ icone, iconeGrande, texto1, texto2, destaque }) => {
  const selecionaIcone = () => {
    if (iconeGrande) {
      return <img className="icone-grande" src={icone} />
    } else {
      return <img className="icone-normal" src={icone} />
    }
  }

  return (
    <div className="dicas">
      {selecionaIcone()}
      <p>
        {texto1} <span>{destaque}</span> {texto2}
      </p>
    </div>
  )
}

export default Dicas
