import React from 'react'

const Titulo = ({ texto1, texto2, subtitulo, destaque, corDestaque }) => {
  return (
    <div className="titulo">
      <h2>
        {texto1} <span style={{ color: corDestaque }}>{destaque}</span> {texto2}
      </h2>
      {subtitulo && <span>{subtitulo}</span>}
    </div>
  )
}

export default Titulo
