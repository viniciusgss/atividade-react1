// src/components/ListaItens.tsx

import React from 'react';

interface ListaItensProps {
  itens: string[];
}

const ListaItens: React.FC<ListaItensProps> = ({ itens }) => {
  return (
    <ul className="list-disc list-inside space-y-2">
      {itens.map((item, index) => (
        <li key={index} className="text-lg">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListaItens;
