import React from 'react';
import { Image } from 'react-native';

const Crf = ({ source, style }) => {
  return (
    <Image
      source={source}
      style={[{ width: 25, height: 25 }, style]} // Defina o tamanho desejado para a imagem
    />
  );
};

export default Crf;
