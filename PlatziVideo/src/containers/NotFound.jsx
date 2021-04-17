import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>No encontrado</h1>
    <h2>
      Regresa
      <Link href='/'> al home</Link>
    </h2>
  </>
);

export default NotFound;

//*Con esto regresamos al home
