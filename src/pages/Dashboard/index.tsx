import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Title, Form, Error, Repositories } from './styles';

interface RepoData {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string
  }
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<RepoData[]>([]);
  const [newRepo, setNewRepo] = useState('');
  const [error, setError] = useState('');

  async function addNewRepoHandler(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setError("Digite o autor/name do repositório.");
      return;
    }

    try {
      const response = await api.get<RepoData>(`/repos/${newRepo}`);
      const repo = response.data;
      setRepositories([...repositories, repo]);
      setNewRepo('');
      setError('');
    } catch(err) {
      setError("Repositório não encontrado.");
    }
  }

  return (

    <>
      <img src={logo} alt="Github Explorer" />

      <Title>Exploxe repositórios no Github</Title>

      <Form hasError={!!error} onSubmit={addNewRepoHandler}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          onChange={(e) => setNewRepo(e.target.value)}
          value={newRepo}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {error && <Error>{error}</Error>}

      <Repositories>
        {repositories.map(repo => (
          <a key={repo.full_name} href="#">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={24} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
