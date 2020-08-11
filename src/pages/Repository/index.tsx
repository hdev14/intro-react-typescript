import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronsLeft, FiChevronRight} from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import {Header, RepositoryInfo, Issues} from './styles';

interface RouteRepoParams {
  full_name: string
}

const Repository: React.FC = () => {
  const {params} = useRouteMatch<RouteRepoParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars1.githubusercontent.com/u/44510574?v=4" alt="" />
          <div>
            <h1>autho/name</h1>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="" >
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>

          <FiChevronRight size={24} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
