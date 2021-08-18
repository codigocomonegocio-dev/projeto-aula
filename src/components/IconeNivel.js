import React from 'react'

const IconeNivel = ({ numero }) => {
  const selecionaNumero = (valorRecebido) => {
    switch (valorRecebido) {
      case 1:
        return 'um'
        break
      case 2:
        return 'dois'
        break
      case 3:
        return 'tres'
        break
      case 4:
        return 'quatro'
        break
      case 5:
        return 'cinco'
        break
      case 6:
        return 'seis'
        break
      case 7:
        return 'sete'
        break
      default:
    }
  }

  return (
    <>
      <div className="iconeNivel">
        <div className={`circulo ${selecionaNumero(numero)}`}>
          <div className="textoNumero">{numero}</div>
        </div>
      </div>
    </>
  )
}

export default IconeNivel
