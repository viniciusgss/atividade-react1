// src/components/Rodape.tsx

import React from 'react';

interface RodapeProps {
  informacao: string; // Texto ou informações que você quer exibir no rodapé
}

const Rodape: React.FC<RodapeProps> = ({ informacao }) => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center w-full">
      <p className="text-sm">{informacao}</p>
    </footer>
  );
};

export default Rodape;
