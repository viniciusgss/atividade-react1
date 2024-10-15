// src/components/Quadrado.tsx

import React from 'react';

interface QuadradoProps {
  cor: string;
  tamanho: number;
}

const Quadrado: React.FC<QuadradoProps> = ({ cor, tamanho }) => {
  return (
    <div
      className={`bg-${cor}`}
      style={{ width: `${tamanho}px`, height: `${tamanho}px` }}
    />
  );
};

export default Quadrado;


//  <div className="flex items-center justify-center h-screen space-x-4">
//<Quadrado cor="blue" tamanho={100} />//
//<Quadrado cor="red" tamanho={150} />//
//</div>//