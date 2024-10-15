// src/components/Botao.tsx

"use client"; // Marcando este componente como Client Component

import React from 'react';

interface BotaoProps {
  texto: string;
  onClick: () => void;
}

const Botao: React.FC<BotaoProps> = ({ texto, onClick }) => {
  return (
    <button
      className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default Botao;
