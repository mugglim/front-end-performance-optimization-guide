import React from 'react';
import { useSelector } from 'react-redux';
import ImageModal from '../components/ImageModal';

function ImageModalContainer() {
  const modalVisible = useSelector(state => state.imageModal.modalVisible);
  const bgColor = useSelector(state => state.imageModal.bgColor);
  const src = useSelector(state => state.imageModal.src);
  const alt = useSelector(state => state.imageModal.alt);

  return <ImageModal modalVisible={modalVisible} bgColor={bgColor} src={src} alt={alt} />;
}

export default ImageModalContainer;
