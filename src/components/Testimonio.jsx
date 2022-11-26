import React from 'react'     //Importar React desde el 2020 ya no es obligatorio, ya que viene por defecto
import testimonio from '../estilos/testimonio.css'

function Testimonio (props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} alt={`${props.nombre}`} />
      {console.log(props.nombre)};
      
      <div className='contenedor-texto-testimonio'>
         <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
            </p>
         <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong>
            </p>
         <p className='texto-testimonio'>"{props.testimonio}".</p>
      </div>
    </div>
  )
}

export default Testimonio