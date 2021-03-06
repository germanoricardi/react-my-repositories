import React, { useCallback, useState } from "react"
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Container, Form, SubmitButton, List, DeleteButton } from './styles';

import api from '../../services/api';
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Main() {

  const [newRepo, setNewRepo] = useState('');
  const [repositorios, setRepositorios] = useState(JSON.parse(localStorage.getItem("repos")) ?? []);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // salvar
  useEffect(() => {
    console.log(JSON.stringify(repositorios))
    window.localStorage.setItem("repos", JSON.stringify(repositorios));
  }, [repositorios]);

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    
    async function submit() {  
      setLoading(true);
      setAlert(null);

      try {
        if(newRepo === '') {
          throw new Error('Você precisa indicar um repositório');
        }

        const response = await api.get(`repos/${newRepo}`);

        const hasRepo = repositorios.find(repo => repo.name === newRepo);

        if(hasRepo){
          throw new Error('Repositório duplicado');
        }
        
        const data = {
          name: response.data.full_name,
        }
    
        setRepositorios([...repositorios, data]);
        setNewRepo('');
        console.log(data, repositorios)
      } catch (error) {
        setAlert(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    submit();

  }, [newRepo, repositorios]);

  function handleInputChange(evt) {
    setNewRepo(evt.target.value);
    setAlert(null);
  }

  const handleDelete = useCallback((repo) => {
    const find = repositorios.filter(r => r.name !== repo);
    setRepositorios(find);
  }, [repositorios]);

  return(
    <Container>

      <h1>
        <FaGithub />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit} error={alert}>
        <input 
          type="text" 
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={handleInputChange} />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>
      
      <List>
        {repositorios.map(repo => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>

              {repo.name}
            </span>
            <Link to={`/repositorio/${encodeURIComponent(repo.name)}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>

    </Container>
  )
};
