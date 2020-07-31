import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function AdicionarVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeos</h1>

      <Link to="/adicionar/categoria">
        Adicionar Categoria
      </Link>
    </PageDefault>


  )
}

export default AdicionarVideo;