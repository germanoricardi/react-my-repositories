import React, { useCallback, useState } from "react"
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default function Main() {

  const [newRepo, setNewRepo] = useState('');
  const [respositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();

    async function submit(evt) {  
      const response = await api.get(`repos/${newRepo}`);
      
      const data = {
        name: response.data.full_name,
      }
  
      setRepositorios([...respositorios, data]);
      setNewRepo('');
    }

    submit();

  }, [newRepo, respositorios]);

  function handleInputChange(evt) {
    setNewRepo(evt.target.value);
  }

  return(
    <Container>

      <h1>
        <FaGithub />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={handleInputChange} />

        <SubmitButton>
          <FaPlus color="#FFF" size={14} />          
        </SubmitButton>
      </Form>


    </Container>
  )
};
