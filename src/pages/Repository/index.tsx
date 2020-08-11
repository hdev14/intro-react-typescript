import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RouteRepoParams {
  full_name: string
}

interface RepoData {
  full_name: string;
  description: string;
  stargazers_count: number;
  open_issues_count: number;
  forks_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IssueData {
  id: number;
  html_url: string;
  title: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouteRepoParams>();
  const [repository, setRepository] = useState<RepoData | null>(null);
  const [issues, setIssues] = useState<IssueData[]>([]);

  useEffect(() => {
    async function fecthData() {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get(`/repos/${params.full_name}`),
        api.get(`/repos/${params.full_name}/issues`)
      ]);

      setRepository(repositoryResponse.data);
      setIssues(issuesResponse.data);
    }

    fecthData();

  }, [params.full_name]);
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <h1>{repository.full_name}</h1>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>

      )}

      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} target="__blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={24} />
          </a>
        ))}
      </Issues>

    </>
  );
};

export default Repository;
