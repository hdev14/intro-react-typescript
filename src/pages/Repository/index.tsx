import React from 'react';
import {useRouteMatch} from 'react-router-dom';

interface RouteRepoParams {
  full_name: string
}

const Repository: React.FC = () => {
  const {params} = useRouteMatch<RouteRepoParams>();
  return (
    <h1>Repository: {params.full_name}</h1>
  );
};

export default Repository;
