// src/components/Cabecalho.tsx

import React from 'react';

interface CabecalhoProps {
  titulo: string;         // Título do cabeçalho
  descricao: string;      // Descrição do cabeçalho
}

const Cabecalho: React.FC<CabecalhoProps> = ({ titulo, descricao }) => {
  return (
    <header className="bg-gray-800 text-white p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold">{titulo}</h1>
      <p className="mt-2 text-lg">{descricao}</p>
    </header>
  );
};

export default Cabecalho;
