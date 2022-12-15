import React from 'react'
import { useState } from 'react';

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
    var removeA = document.getElementById(repo.id)
    removeA?.remove()
  }

  return (
    <ItemContainer id={repo.id}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <a onClick={handleRemove} href="#"  rel="noreferrer" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
