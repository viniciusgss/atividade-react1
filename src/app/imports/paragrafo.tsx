// src/components/Paragrafo.tsx

import React from 'react';

interface ParagrafoProps {
  texto: string;
}

const Paragrafo: React.FC<ParagrafoProps> = ({ texto }) => {
  return (
    <p className="text-lg text-gray-700 leading-relaxed">
      {texto}
    </p>
  );
};

export default Paragrafo;
