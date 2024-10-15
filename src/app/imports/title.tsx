
// src/components/Titulo.tsx

import React from 'react';

interface TituloProps {
  texto: string;
}

const Titulo: React.FC<TituloProps> = ({ texto }) => {
  return (
    <h1 className="text-4xl font-bold text-center my-4">
      {texto}
    </h1>
  );
};

export default Titulo;

//  <div className="flex flex-col items-center justify-center h-screen space-y-6">
//<Titulo texto="Bem-vindo à Página" />//
//<div className="flex space-x-4"></div>//
//</div>//
