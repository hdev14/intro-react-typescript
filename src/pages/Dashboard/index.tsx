import React, { useState, useEffect, FormEvent } from 'react';
import {Link} from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Title, Form, Error, Repositories } from './styles';

interface RepoData {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const STORAGE_KEY = '@GithubExplorer:repositories';

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<RepoData[]>(() => {
    const storedRepos = localStorage.getItem(STORAGE_KEY);
    if (storedRepos) {
      return JSON.parse(storedRepos);
    }

    return [];
  });

  const [newRepo, setNewRepo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(repositories));
  }, [repositories]);

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
          <Link key={repo.full_name} to={`/repositories/${repo.full_name}`}>
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>

            <FiChevronRight size={24} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
