import React from 'react';
import useLazyImage from '../hooks/useLazyImage';

function Card(props) {
  const imageRef = useLazyImage(props.image);

  return (
    <div className="Card text-center">
      <img ref={imageRef} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
