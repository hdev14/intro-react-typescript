import React from 'react';
import {FiChevronRight} from 'react-icons/fi'

import logo from '../../assets/logo.svg';
import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />

    <Title>Exploxe repositórios no Github</Title>

    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="#">
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt=""/>
        <div>
          <strong>repositorio</strong>
          <p>descrição</p>
        </div>

        <FiChevronRight size={24} />
      </a>
      <a href="#">
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt=""/>
        <div>
          <strong>repositorio</strong>
          <p>descrição</p>
        </div>

        <FiChevronRight size={24} />
      </a>
      <a href="#">
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt=""/>
        <div>
          <strong>repositorio</strong>
          <p>descrição</p>
        </div>

        <FiChevronRight size={24} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
