// src/pages/index.tsx

"use client";

import React from 'react';
import Cabecalho from './imports/cabecalho';
import Paragrafo from './imports/paragrafo';
import Botao from './imports/botao';
import Quadrado from './imports/quadrado';
import Lista from './imports/lista';
import Rodape from './imports/footer';

export default function Home() {
  const handleClick = () => {
    alert('Botão clicado!');
  };

  const itensDaLista = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <Cabecalho 
        titulo="Bem-vindo à Minha Página" 
        descricao="Esta é uma descrição personalizada do cabeçalho." 
      />
      <Paragrafo texto="Aqui está um parágrafo com texto personalizável." />
      <div className="flex space-x-4">
        <Quadrado cor="blue" tamanho={100} />
        <Quadrado cor="red" tamanho={150} />
      </div>
      <Lista itens={itensDaLista} />
      <Botao texto="Clique Aqui" onClick={handleClick} />
      <Rodape informacao="footer legal" />
    </div>
  );
}
