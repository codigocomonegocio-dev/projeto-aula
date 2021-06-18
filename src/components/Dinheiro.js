import React, { useState } from 'react'
import MaskedInput from 'react-text-mask'

const Dinheiro = () => {
  const mascaraReal = {
    MOEDA_REAL: [/^R\$(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/],
  }

  return (
    <>
      <h1>Brenno</h1>
      <div className="dinheiro">
        <MaskedInput
          type="text"
          maxlength="9"
          id="valor"
          mask={mascaraReal.MOEDA_REAL}
        />
      </div>
    </>
  )
}

export default Dinheiro
