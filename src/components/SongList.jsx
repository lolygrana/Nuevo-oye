import SongCard from './SongCard';
import PropTypes from 'prop-types';


const SongList = (props) => {
  const { canciones } = props;

  return (
    <div className="song-list">
      {canciones.map((cancion, index) => {
        return <SongCard key={index} cancion={cancion} />;
      })}
    </div>
  );
}
SongList.propTypes = {
  canciones: PropTypes.array.isRequired,
}; //para solucionar errores

export default SongList;




// import React from 'react';
// import SongCard from './SongCard';
// import songsData from '../datos.json';

//   const { canciones } = songsData
//  // o const canciones = songsData.canciones que es lo mismo

// const SongList = (props) => {
//   //const { canciones } = props;

//   console.log(canciones)

//   return (
//     <div className="song-list">
//       {canciones.map((cancion, index) => {
//         return <SongCard key={index} cancion={cancion} />;
//       })}
//     </div>
//   );
// }

// export default SongList;
