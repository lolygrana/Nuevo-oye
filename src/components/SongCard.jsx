import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';


function SongCard({ cancion }) {

  return (
    <Card style={{ width : "15rem", maxHeight: "15rem" }}>
      <Card.Img variant="top" src={`/img/icon_${cancion.icono}.svg`} />
      <Card.Body className='bodyCard'>
        <Card.Title>{cancion.nombre}</Card.Title>
        <audio controls>
          <source src={`/canciones/${cancion.ruta}`} type="audio/mp3" />
        </audio>
      </Card.Body>
    </Card>
  );
}
SongCard.propTypes = {
  cancion: PropTypes.array.isRequired,
}; //para solucionar errores

export default SongCard;















// import { Card } from 'react-bootstrap';
// import React, { useState, useEffect } from 'react';

// function SongCard({ cancion }) {

//   const [song, setSong] = useState({});

//   useEffect(() => {
//     fetch('src/datos.json')
//       .then(response => response.json())
//       .then(data => {
//         // buscar la canción por su nombre en el archivo JSON
//         const songData = data.canciones.find(item => item.nombre === cancion.nombre);
//         setSong(songData);
//       })
//       .catch(error => console.error(error));
//   }, [cancion]);

//   return (
//     <>
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={cancion.icono} /> 
//         <Card.Body>
//           <Card.Title>{song.nombre}</Card.Title>
//           <audio controls src={song.ruta} type="audio/mpeg" />
//         </Card.Body>
//       </Card>
//     </>
//   );
// }

// export default SongCard;




